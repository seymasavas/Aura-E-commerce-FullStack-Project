import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Plus, Edit2, Trash2, Check } from "lucide-react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {
  fetchAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../store/actions/clientActions";
import { toast } from "react-toastify";

export default function CreateOrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addressList = useSelector((state) => state.client.addressList) || [];

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    if (addressList.length > 0 && !selectedShippingAddress) {
      setSelectedShippingAddress(addressList[0].id);
      setSelectedBillingAddress(addressList[0].id);
    }
  }, [addressList]);

  const handleOpenAddForm = () => {
    setEditingAddress(null);
    reset({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
    });
    setShowAddressForm(true);
  };

  const handleOpenEditForm = (addr) => {
    setEditingAddress(addr);
    setValue("title", addr.title);
    setValue("name", addr.name);
    setValue("surname", addr.surname);
    setValue("phone", addr.phone);
    setValue("city", addr.city);
    setValue("district", addr.district);
    setValue("neighborhood", addr.neighborhood);
    setShowAddressForm(true);
  };

  const onSubmitAddress = async (data) => {
    try {
      if (editingAddress) {
        await dispatch(updateAddress({ ...data, id: editingAddress.id }));
        toast.success("Adres başarıyla güncellendi.");
      } else {
        await dispatch(addAddress(data));
        toast.success("Yeni adres başarıyla eklendi.");
      }
      setShowAddressForm(false);
      reset();
    } catch (error) {
      toast.error("İşlem başarısız oldu.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      try {
        await dispatch(deleteAddress(id));
        toast.success("Adres silindi.");
      } catch (error) {
        toast.error("Adres silinemedi.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-['Montserrat']">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-[1200px]">
        <div className="flex border-b border-[#ECECEC] mb-8 bg-white rounded-t-lg shadow-sm">
          <div className="flex-1 p-4 border-b-2 border-[#E77C40] font-bold text-[#E77C40] flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#E77C40] text-white flex items-center justify-center text-xs">
              1
            </span>
            Adres Bilgileri
          </div>
          <div className="flex-1 p-4 text-[#737373] font-medium flex items-center gap-2 opacity-60">
            <span className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs">
              2
            </span>
            Ödeme Seçenekleri
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#252B42]">
                Teslimat Adresi
              </h3>
              <button
                onClick={handleOpenAddForm}
                className="bg-[#E77C40] text-white text-sm font-bold py-2 px-4 rounded hover:bg-[#d46d36] transition-colors flex items-center gap-2"
              >
                <Plus size={16} /> Yeni Adres Ekle
              </button>
            </div>

            {showAddressForm && (
              <div className="bg-white p-6 rounded-lg border border-[#ECECEC] shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-[#252B42]">
                  {editingAddress ? "Adresi Düzenle" : "Yeni Adres Ekle"}
                </h4>
                <form
                  onSubmit={handleSubmit(onSubmitAddress)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <input
                    type="text"
                    placeholder="Adres Başlığı (Örn: Ev, İş)"
                    className="border p-2 rounded text-sm"
                    {...register("title", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Ad"
                    className="border p-2 rounded text-sm"
                    {...register("name", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Soyad"
                    className="border p-2 rounded text-sm"
                    {...register("surname", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Telefon (05XXXXXXXXX)"
                    className="border p-2 rounded text-sm"
                    {...register("phone", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="İl (Şehir)"
                    className="border p-2 rounded text-sm"
                    {...register("city", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="İlçe"
                    className="border p-2 rounded text-sm"
                    {...register("district", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Mahalle"
                    className="border p-2 rounded text-sm sm:col-span-2"
                    {...register("neighborhood", { required: true })}
                  />
                  <div className="flex gap-2 sm:col-span-2 justify-end mt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddressForm(false)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-bold"
                    >
                      İptal
                    </button>
                    <button
                      type="submit"
                      className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm font-bold"
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addressList.map((addr) => (
                <div
                  key={addr.id}
                  className={`border rounded-lg p-4 bg-white shadow-sm relative cursor-pointer transition-all ${
                    selectedShippingAddress === addr.id
                      ? "border-[#E77C40] ring-1 ring-[#E77C40]"
                      : "border-[#ECECEC]"
                  }`}
                  onClick={() => setSelectedShippingAddress(addr.id)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-[#252B42] text-sm">
                      {addr.title}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenEditForm(addr);
                        }}
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(addr.id);
                        }}
                        className="text-gray-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-medium mb-1">
                    {addr.name} {addr.surname} - {addr.phone}
                  </p>
                  <p className="text-xs text-gray-500">
                    {addr.neighborhood}, {addr.district} / {addr.city}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-4 bg-white p-4 rounded-lg border border-[#ECECEC]">
              <input
                type="checkbox"
                id="sameAddress"
                checked={sameAsShipping}
                onChange={(e) => setSameAsShipping(e.target.checked)}
                className="w-4 h-4 text-[#E77C40]"
              />
              <label
                htmlFor="sameAddress"
                className="text-sm font-medium text-[#252B42] cursor-pointer"
              >
                Faturamı Aynı Adrese Gönder
              </label>
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-[#ECECEC] p-6 sticky top-[100px]">
              <button className="w-full bg-[#E77C40] text-white font-bold py-3 px-4 rounded-md hover:bg-[#d46d36] transition-colors mb-6 text-sm">
                Kaydet ve Devam Et &gt;
              </button>
              <h3 className="text-lg font-bold mb-4 text-[#252B42]">
                Sipariş Özeti
              </h3>
              <div className="flex justify-between mb-3 text-sm text-[#737373]">
                <span>Ürünün Toplamı</span>
                <span className="font-semibold text-[#252B42]">$8,448.99</span>
              </div>
              <div className="flex justify-between mb-3 text-sm text-[#737373]">
                <span>Kargo Toplam</span>
                <span className="font-semibold text-[#252B42]">$29.99</span>
              </div>
              <div className="flex justify-between mb-6 border-t pt-4 text-base font-bold text-[#252B42]">
                <span>Toplam</span>
                <span className="text-[#E77C40] text-xl">$8,448.99</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
