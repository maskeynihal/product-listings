import appConfig from '@/config/app';
import { useCreateMyBeers } from '@/hooks/query/my-beers/useMyBeers';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface FormModal {
  isOpen: boolean;
  setModalClose: () => void;
}

function CreateBeerFormModal({ isOpen, setModalClose }: FormModal) {
  const cancelButtonRef = useRef(null);
  type Inputs = {
    name: string;
    genre: string;
    description: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const createMyBeerMutation = useCreateMyBeers();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createMyBeerMutation.mutate({ ...data, imageUrl: appConfig.image.defaultBeerImageUrl });

    setModalClose();
  };

  return (
    <>
      <Transition.Root
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setModalClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {' '}
                      <div className="w-full">
                        <h2 className="text-xl font-bold mb-4">Add a new beer</h2>

                        <div className="w-20 h-20 border mb-4">
                          <img
                            src={appConfig.image.defaultBeerImageUrl}
                            className="object-contain w-20 h-20 p-2"
                          />
                        </div>
                        <form
                          className="w-full"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="mb-5">
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Beer Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              required
                              {...register('name', { required: true })}
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              htmlFor="genre"
                              className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Genre <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              id="genre"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              required
                              {...register('genre', { required: true })}
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              htmlFor="genre"
                              className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Description <span className="text-red-400">*</span>
                            </label>
                            <textarea
                              id="description"
                              rows={4}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Write description"
                              {...register('description', { required: true })}
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={setModalClose}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default CreateBeerFormModal;
