import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../store/actions/clientActions";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ChevronDown, ChevronUp, Package } from "lucide-react";

export default function PreviousOrdersPage() {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.client.orderList) || [];
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-['Montserrat']">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-[1200px]">
        <h1 className="text-2xl font-bold mb-6 text-[#252B42] flex items-center gap-2">
          <Package className="text-[#E77C40]" /> Geçmiş Siparişlerim
        </h1>

        {orderList.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center text-gray-500">
            Henüz verilmiş bir siparişiniz bulunmuyor.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orderList.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-[#ECECEC] rounded-lg shadow-sm overflow-hidden"
              >
                {/* Sipariş Özet Satırı */}
                <div
                  onClick={() => toggleOrderDetails(order.id)}
                  className="flex flex-wrap justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex gap-6 items-center">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Sipariş ID
                      </span>
                      <span className="font-bold text-[#252B42]">
                        #{order.id}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Tarih</span>
                      <span className="font-semibold text-sm text-gray-700">
                        {new Date(order.order_date).toLocaleDateString("tr-TR")}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        Toplam Tutar
                      </span>
                      <span className="font-bold text-[#E77C40]">
                        ${order.price?.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#23A6F0]">
                    <span>
                      {expandedOrderId === order.id
                        ? "Detayları Gizle"
                        : "Detayları Göster"}
                    </span>
                    {expandedOrderId === order.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </div>

                {/* Collapsible Panel (Ürün Detayları) */}
                {expandedOrderId === order.id && (
                  <div className="border-t border-[#ECECEC] bg-gray-50 p-4">
                    <h4 className="font-bold text-sm text-[#252B42] mb-3">
                      Sipariş Edilen Ürünler
                    </h4>
                    <div className="flex flex-col gap-3">
                      {order.products?.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white p-3 rounded border border-gray-200 text-sm"
                        >
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#252B42]">
                              Ürün ID: {item.product_id}
                            </span>
                            <span className="text-xs text-gray-500">
                              Detay: {item.detail || "Standart"}
                            </span>
                          </div>
                          <div className="flex items-center gap-6">
                            <span>
                              Adet: <strong>{item.count}</strong>
                            </span>
                            <span className="font-bold text-[#23A6F0]">
                              ${(item.price * item.count).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
