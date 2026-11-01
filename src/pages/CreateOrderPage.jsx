import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Plus, Edit2, Trash2 } from "lucide-react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {
  fetchAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  fetchCards,
  addCard,
  deleteCard,
  createOrder,
} from "../store/actions/clientActions";
import { toast } from "react-toastify";

export default function CreateOrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addressList = useSelector((state) => state.client.addressList) || [];
  const cardList = useSelector((state) => state.client.cardList) || [];
  const cartItems = useSelector((state) => state.shoppingCart?.cart) || [];

  const [activeStep, setActiveStep] = useState(1);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const [showCardForm, setShowCardForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [is3DSecure, setIs3DSecure] = useState(false);

  const {
    register: regAddr,
    handleSubmit: handleAddrSubmit,
    reset: resetAddr,
    setValue: setAddrValue,
  } = useForm();
  const {
    register: regCard,
    handleSubmit: handleCardSubmit,
    reset: resetCard,
  } = useForm();

  const productsSubtotal = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  const baseShipping =
    productsSubtotal > 1500 || productsSubtotal === 0 ? 0 : 29.99;
  const grandTotal = productsSubtotal + baseShipping;

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (addressList.length > 0 && !selectedShippingAddress) {
      setSelectedShippingAddress(addressList[0].id);
    }
    if (cardList.length > 0 && !selectedCard) {
      setSelectedCard(cardList[0].id);
    }
  }, [addressList, cardList]);

  const onSubmitAddress = async (data) => {
    try {
      if (editingAddress) {
        await dispatch(updateAddress({ ...data, id: editingAddress.id }));
        toast.success("Adres güncellendi.");
      } else {
        await dispatch(addAddress(data));
        toast.success("Yeni adres eklendi.");
      }
      setShowAddressForm(false);
      resetAddr();
    } catch (error) {
      toast.error("Adres kaydedilemedi.");
    }
  };

  const handleDeleteAddress = async (id) => {
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      await dispatch(deleteAddress(id));
      toast.success("Adres silindi.");
    }
  };

  const onSubmitCard = async (data) => {
    try {
      const cardPayload = {
        card_no: data.card_no,
        expire_month: Number(data.expire_month),
        expire_year: Number(data.expire_year),
        name_on_card: data.name_on_card,
      };
      await dispatch(addCard(cardPayload));
      toast.success("Kart başarıyla eklendi.");
      setShowCardForm(false);
      resetCard();
    } catch (error) {
      toast.error("Kart eklenemedi.");
    }
  };

  const handleDeleteCard = async (id) => {
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      await dispatch(deleteCard(id));
      toast.success("Kart silindi.");
    }
  };

  const handleCompleteOrder = async () => {
    const selectedItems = cartItems.filter((item) => item.checked);
    if (selectedItems.length === 0) {
      toast.error("Select at least one item to order.");
      return;
    }
    if (!selectedShippingAddress) {
      toast.error("Select a shipping address.");
      setActiveStep(1);
      return;
    }

    const activeCard = cardList.find((card) => card.id === selectedCard);
    if (!activeCard) {
      toast.error("Add and select a payment card.");
      setShowCardForm(true);
      return;
    }

    try {
      const orderPayload = {
        address_id: selectedShippingAddress,
        order_date: new Date().toISOString().slice(0, 19),
        card_no: Number(activeCard.card_no),
        card_name: activeCard.name_on_card,
        card_expire_month: Number(activeCard.expire_month),
        card_expire_year: Number(activeCard.expire_year),
        card_ccv: 321,
        price: grandTotal,
        products: selectedItems.map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: "Standart",
        })),
      };

      await dispatch(createOrder(orderPayload));
      toast.success("🎉 Tebrikler! Siparişiniz başarıyla oluşturuldu.");
      navigate("/");
    } catch (error) {
      toast.error("Sipariş oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-['Montserrat']">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-[1200px]">
        <div className="flex border-b border-[#ECECEC] mb-8 bg-white rounded-t-lg shadow-sm cursor-pointer">
          <div
            onClick={() => setActiveStep(1)}
            className={`flex-1 p-4 border-b-2 font-bold flex items-center gap-2 transition-colors ${
              activeStep === 1
                ? "border-[#E77C40] text-[#E77C40]"
                : "border-transparent text-[#737373]"
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-xs ${activeStep === 1 ? "bg-[#E77C40]" : "bg-gray-400"}`}
            >
              1
            </span>
            Adres Bilgileri
          </div>
          <div
            onClick={() => {
              if (selectedShippingAddress) setActiveStep(2);
              else toast.error("Lütfen önce teslimat adresi seçin.");
            }}
            className={`flex-1 p-4 border-b-2 font-bold flex items-center gap-2 transition-colors ${
              activeStep === 2
                ? "border-[#E77C40] text-[#E77C40]"
                : "border-transparent text-[#737373]"
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-xs ${activeStep === 2 ? "bg-[#E77C40]" : "bg-gray-400"}`}
            >
              2
            </span>
            Ödeme Seçenekleri
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* SOL TARAF: Adres veya Ödeme İçeriği */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            {activeStep === 1 ? (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#252B42]">
                    Teslimat Adresi
                  </h3>
                  <button
                    onClick={() => {
                      setEditingAddress(null);
                      resetAddr();
                      setShowAddressForm(true);
                    }}
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
                      onSubmit={handleAddrSubmit(onSubmitAddress)}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <input
                        type="text"
                        placeholder="Adres Başlığı (Ev, İş)"
                        className="border p-2 rounded text-sm"
                        {...regAddr("title", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="Ad"
                        className="border p-2 rounded text-sm"
                        {...regAddr("name", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="Soyad"
                        className="border p-2 rounded text-sm"
                        {...regAddr("surname", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="Telefon (05XXXXXXXXX)"
                        className="border p-2 rounded text-sm"
                        {...regAddr("phone", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="İl"
                        className="border p-2 rounded text-sm"
                        {...regAddr("city", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="İlçe"
                        className="border p-2 rounded text-sm"
                        {...regAddr("district", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="Mahalle"
                        className="border p-2 rounded text-sm sm:col-span-2"
                        {...regAddr("neighborhood", { required: true })}
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
                              setEditingAddress(addr);
                              setAddrValue("title", addr.title);
                              setAddrValue("name", addr.name);
                              setAddrValue("surname", addr.surname);
                              setAddrValue("phone", addr.phone);
                              setAddrValue("city", addr.city);
                              setAddrValue("district", addr.district);
                              setAddrValue("neighborhood", addr.neighborhood);
                              setShowAddressForm(true);
                            }}
                            className="text-gray-500 hover:text-blue-600"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteAddress(addr.id);
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
              </div>
            ) : (
              <div className="flex flex-col gap-6 bg-white p-6 rounded-lg border border-[#ECECEC] shadow-sm font-['Montserrat']">
                <div className="flex justify-between items-center border-b pb-4">
                  <h3 className="text-xl font-bold text-[#252B42]">
                    Kart ile Öde
                  </h3>
                  <button
                    onClick={() => setShowCardForm(!showCardForm)}
                    className="text-[#E77C40] text-sm font-bold hover:underline flex items-center gap-1"
                  >
                    <Plus size={16} />{" "}
                    {showCardForm
                      ? "Kayıtlı Kartlarıma Dön"
                      : "Başka bir kart ile ödeme yap"}
                  </button>
                </div>

                {showCardForm ? (
                  /* Yeni Kart Ekleme Formu */
                  <form
                    onSubmit={handleCardSubmit(onSubmitCard)}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <label className="text-xs font-bold text-[#737373] mb-1 block">
                        Kart Numarası
                      </label>
                      <input
                        type="text"
                        placeholder="1234567890123456"
                        maxLength={16}
                        className="w-full border border-gray-300 p-2.5 rounded text-sm focus:border-[#E77C40] focus:outline-none"
                        {...regCard("card_no", { required: true })}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#737373] mb-1 block">
                          Son Kullanma Ay
                        </label>
                        <select
                          className="w-full border border-gray-300 p-2.5 rounded text-sm bg-white"
                          {...regCard("expire_month", { required: true })}
                        >
                          <option value="">Ay</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#737373] mb-1 block">
                          Son Kullanma Yıl
                        </label>
                        <select
                          className="w-full border border-gray-300 p-2.5 rounded text-sm bg-white"
                          {...regCard("expire_year", { required: true })}
                        >
                          <option value="">Yıl</option>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#737373] mb-1 block">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="CVV"
                          maxLength={4}
                          className="w-full border border-gray-300 p-2.5 rounded text-sm"
                          {...regCard("cvv", { required: true })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#737373] mb-1 block">
                        Kart Üzerindeki İsim
                      </label>
                      <input
                        type="text"
                        placeholder="Ad Soyad"
                        className="w-full border border-gray-300 p-2.5 rounded text-sm"
                        {...regCard("name_on_card", { required: true })}
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        id="secure3d"
                        checked={is3DSecure}
                        onChange={(e) => setIs3DSecure(e.target.checked)}
                        className="w-4 h-4 text-[#E77C40]"
                      />
                      <label
                        htmlFor="secure3d"
                        className="text-sm font-medium text-[#252B42] cursor-pointer"
                      >
                        3D Secure ile ödemek istiyorum
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#E77C40] text-white font-bold py-3 rounded mt-4 hover:bg-[#d46d36] transition-colors"
                    >
                      Kartı Kaydet ve Kullan
                    </button>
                  </form>
                ) : (
                  /* Kayıtlı Kartlar Listesi */
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cardList.map((card) => (
                        <div
                          key={card.id}
                          onClick={() => setSelectedCard(card.id)}
                          className={`border rounded-lg p-4 cursor-pointer relative bg-white shadow-sm transition-all ${
                            selectedCard === card.id
                              ? "border-[#E77C40] ring-1 ring-[#E77C40]"
                              : "border-[#ECECEC]"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-sm text-[#252B42]">
                              {card.name_on_card}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCard(card.id);
                              }}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-sm font-mono text-gray-700 tracking-wider mb-2">
                            **** **** **** {card.card_no.toString().slice(-4)}
                          </p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>
                              Son Kul: {card.expire_month}/{card.expire_year}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Taksit Seçenekleri Alanı */}
                    <div className="mt-6 border-t pt-4">
                      <h4 className="font-bold text-md text-[#252B42] mb-3">
                        Taksit Seçenekleri
                      </h4>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-3 text-xs font-bold text-gray-600 flex justify-between">
                          <span>Taksit Sayısı</span>
                          <span>Aylık Ödeme</span>
                        </div>
                        <div className="p-3 flex justify-between items-center bg-white text-sm">
                          <label className="flex items-center gap-2 cursor-pointer font-medium">
                            <input
                              type="radio"
                              defaultChecked
                              name="installment"
                              className="text-[#E77C40]"
                            />
                            Tek Çekim
                          </label>
                          <span className="font-bold text-[#E77C40]">
                            ${grandTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SAĞ TARAF: Sipariş Özeti ve İlerleme Butonu */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-[#ECECEC] p-6 sticky top-[100px]">
              <button
                onClick={() => {
                  if (activeStep === 1) {
                    if (!selectedShippingAddress) {
                      toast.error("Lütfen teslimat adresi seçin.");
                      return;
                    }
                    setActiveStep(2);
                  } else {
                    handleCompleteOrder();
                  }
                }}
                className="w-full bg-[#E77C40] text-white font-bold py-3 px-4 rounded-md hover:bg-[#d46d36] transition-colors mb-6 text-sm"
              >
                {activeStep === 1 ? "Kaydet ve Devam Et >" : "Ödeme Yap"}
              </button>

              <h3 className="text-lg font-bold mb-4 text-[#252B42]">
                Sipariş Özeti
              </h3>
              <div className="flex justify-between mb-3 text-sm text-[#737373]">
                <span>Ürünün Toplamı</span>
                <span className="font-semibold text-[#252B42]">
                  ${productsSubtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-3 text-sm text-[#737373]">
                <span>Kargo Toplam</span>
                <span className="font-semibold text-[#252B42]">
                  ${baseShipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-6 border-t pt-4 text-base font-bold text-[#252B42]">
                <span>Toplam</span>
                <span className="text-[#E77C40] text-xl">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
