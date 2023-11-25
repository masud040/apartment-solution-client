import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCouponModal = ({ closeModal, isOpen, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleAddCoupon = async (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon_code = form.code.value;
    const discount_percentage = parseInt(form.discount.value);
    const coupon_details = form.description.value;
    const couponInfo = {
      coupon_code,
      discount_percentage,
      coupon_details,
    };
    const { data } = await axiosSecure.post("/coupons", couponInfo);
    if (data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Coupon added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      form.reset();
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Add Coupon
                </Dialog.Title>
                <form onSubmit={handleAddCoupon}>
                  <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Coupon Code
                    </label>
                    <input
                      type="text"
                      name="code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Coupon Code"
                      required
                    />
                  </div>

                  <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Discount
                    </label>
                    <input
                      type="number"
                      name="discount"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Discount like 15, 20"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Coupon description
                    </label>
                    <input
                      type="text"
                      name="description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Coupon description "
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-xl mt-4 text-white font-semibold w-full"
                  >
                    Submit
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
AddCouponModal.propTypes = {
  closeModal: PropTypes.func,
  refetch: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default AddCouponModal;
