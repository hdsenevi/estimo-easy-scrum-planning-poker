import React from "react";
import Navbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall";
import PrimaryButton from "../components/PrimaryButton";

export default function Register() {
  return (
      <>
        <Navbar transparent/>
        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
                className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                style={{
                  backgroundImage: "url('/img/register_bg_2.png')",
                }}
            />
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-6/12 px-4">
                  <div
                      className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6 lg:px-10">
                      <div className="text-center mb-3">
                        <h6 className="text-blueGray-500 text-sm font-bold">
                          Join a story pointing session
                        </h6>
                      </div>
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                          >
                            Session ID
                          </label>
                          <input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Session ID"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                          >
                            Moderator Name
                          </label>
                          <input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Name"
                          />
                        </div>
                        <div className="text-center mt-6">
                          <PrimaryButton text="Join session"/>
                        </div>
                      </form>
                      <hr className="mt-6 border-b-1 border-blueGray-300"/>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-blueGray-400 text-center mb-3 font-bold">
                        <small>Create a new story pointing session</small>
                      </div>
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                          >
                            Session ID
                          </label>
                          <input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Session ID"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                          >
                            Moderator Name
                          </label>
                          <input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Name"
                          />
                        </div>

                        <div className="text-center mt-6">
                          <PrimaryButton text="Create session"/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterSmall absolute/>
          </section>
        </main>
      </>
  );
}
