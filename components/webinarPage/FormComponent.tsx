import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const FormComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const handleCareerSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      swal({
        title: "Enter valid email address",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else if (!/^\d{10}$/.test(contact)) {
      swal({
        title: "Enter Your 10 digit Phone Number",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else {
      axios
        .post(
          "https://sheet.best/api/sheets/a9171979-87fc-4549-9b70-f537a34083f3",
          { name, email, contact }
        )
        .then(() => {
          setName("");
          setEmail("");
          setContact("");
          swal({
            title: "Registration Successful",
            text: "",
            icon: "success",
            buttons: {
              confirm: { text: "Okay", className: "sweet-warning" },
            },
          });
        })
        .catch((error) => {
          console.error("Error while posting data:", error);
        });
    }

    if (name === "" || email === "" || contact === "") {
      swal({
        title: "Please fill all required fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    }
  };

  return (
    <div>
      <section className="relative block pt-24 lg:pt-0 bg-blueGray-800">
      <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Come learn with us !
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-800">
                    The webinar will help you interact with people willing to
                    share knowledge.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      onChange={(event) => {
                        const { value } = event.target;
                        setName(value);
                      }}
                      value={name}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      onChange={(event) => {
                        const { value } = event.target;
                        setEmail(value);
                      }}
                      value={email}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="number"
                    >
                      Contact Number
                    </label>
                    <input
                      name="number"
                      id="number"
                      onChange={(event) => {
                        const { value } = event.target;
                        setContact(value);
                      }}
                      value={contact}
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={handleCareerSubmit}
                      className="bg-gray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormComponent;
