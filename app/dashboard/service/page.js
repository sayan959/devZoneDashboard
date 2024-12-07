"use client";
import "./Service.css"
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const DashService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("https://devzoneit-xi.vercel.app/services");
      const data = await res.json();
      return data;
    },
  });

  const [filedInput, setInput] = useState([]);
  const addInput = () => {
    const input = [...filedInput, { name: "", description: "" }];
    setInput(input);
  };
  const changeInput = (onChangeValue, i, fieldName) => {
    const inputData = [...filedInput];
    inputData[i][fieldName] = onChangeValue.target.value;
    setInput(inputData);
  };

  const [filedInputF, setInputF] = useState([]);
  const addInputF = () => {
    const input = [...filedInputF, []];
    setInputF(input);
  };
  const changeInputF = (onChangeValue, i) => {
    const inputData = [...filedInputF];
    inputData[i] = onChangeValue.target.value;
    setInputF(inputData);
  };

  const [avatar, setAvatar] = useState();
  const [preview, setPreview] = useState();
  const [avatar2, setAvatar2] = useState();
  const [preview2, setPreview2] = useState();

  const [updateNeed, setUpdatedNeed] = useState();
  const [styleScale, setScale] = useState(0);
  const [editHeight, setHeight] = useState("h-0");

  const servicePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const fDesc = form.fDesc.value;
    const sDesc = form.sDesc.value;
    const teams = filedInput;
    const feature = filedInputF;
    const category = form.category.value;

    const photo = new FormData();
    photo.append("file", avatar);
    photo.append("upload_preset", "devzone");
    photo.append("cloud_name", "doke1aoji");

    const photo2 = new FormData();
    photo2.append("file", avatar2);
    photo2.append("upload_preset", "devzone");
    photo2.append("cloud_name", "doke1aoji");

    fetch("https://api.cloudinary.com/v1_1/doke1aoji/image/upload", {
      method: "post",
      body: photo,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          fetch("https://api.cloudinary.com/v1_1/doke1aoji/image/upload", {
            method: "post",
            body: photo2,
            
          })
            .then((res) => res.json())
            .then((data2) => {
              if (data2.url) {
                const service = {
                  title,
                  fDesc,
                  sDesc,
                  teams,
                  feature,
                  category,
                  photo: data.url,
                  midImg: data2.url,
                };
                fetch("https://devzoneit-xi.vercel.app/add-service", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(service),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.acknowledged) {
                      toast.success(`${service.title} is Successfully Added`);
                      refetch();
                      form.reset();
                      setPreview("");
                      setAvatar("");
                      setPreview2("");
                      setAvatar2("");
                      setInputF([]);
                      setInput([]);
                    }
                  });
              }
            });
        }
      });
  };

  const editService = (serviceData) => {
    setScale(1);
    setUpdatedNeed(serviceData);
    setHeight("h-auto");
  };

  const closeService = () => {
    setScale(0);
    setUpdatedNeed({});
    setHeight("h-0");
  };

  const serviceUpdate = (e, service) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const fDesc = form.fDesc.value;
    const sDesc = form.sDesc.value;

    const serviceUpt = {
      title,
      fDesc,
      sDesc,
    };
    fetch(`https://devzoneit-xi.vercel.app/service/${service}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceUpt),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${service.title} is Successfully updated`);
          refetch();
          form.reset();
          closeService();
        }
      });
  };

  const deleteTeam = (id) => {
    const confirm = window.confirm("Are you sure delete this service");
    if (confirm) {
      fetch(`https://devzoneit-xi.vercel.app/service-delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Service is Deleted");
            refetch();
          }
        });
    }
  };

  return (
    <div className="dashTeam">
      <h4 className="font-secondary text-dark">Services</h4>
      <div className="service-control">
        <div className="service-action-edit">
          <div className="service-list">
            <table>
              <thead>
                <tr>
                  <th>Sn</th>
                  <th>Photo</th>
                  <th className="name">Title</th>
                  <th className="name">Category</th>
                  <th>1st Description</th>
                  <th>2nd Description</th>
                  <th>Mid Image</th>
                  <th>Working With</th>
                  <th>Feature</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <Image src={service.photo} width={100} height={100} alt="web developer" />
                    </td>
                    <td className="name">{service.title}</td>
                    <td>
                      {service?.category
                        ? `${service.category.substring(0, 20)}...`
                        : "Not Added"}
                    </td>
                    <td>
                      {service?.fDesc
                        ? `${service.fDesc.substring(0, 20)}...`
                        : "Not Added"}
                    </td>
                    <td>
                      {service?.sDesc
                        ? `${service.sDesc.substring(0, 20)}...`
                        : "Not Added"}
                    </td>
                    <td>
                      {service?.midImg ? (
                        <Image src={service.midImg} width={100} height={100} alt="web developer" />
                      ) : (
                        "Not Added"
                      )}
                    </td>
                    <td>
                      {service?.teams
                        ? service.teams.map((working, i) => (
                            <li
                              className="flex"
                              style={{ listStyle: "none" }}
                              key={i}
                            >
                              <p>{working.name.substring(0, 8)}..</p>
                              <p>{working.description.substring(0, 8)} ..</p>
                            </li>
                          ))
                        : "Not Added"}
                    </td>
                    <td>
                      {service?.feature ? (
                        <ul className="flex">
                          {service.feature.map((feat, i) => (
                            <li key={i}>{feat.substring(0, 5)}..</li>
                          ))}
                        </ul>
                      ) : (
                        "Not Added"
                      )}
                    </td>
                    <td className="flex gap-5 item-center justify-center">
                      <button
                        onClick={() => editService(service)}
                        className="text-primary"
                      >
                        <FaRegEdit />
                      </button>
                      <button onClick={() => deleteTeam(service?._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{ transform: `scale(${styleScale})` }}
            className={`update-service ${styleScale == 0 ? "h-0" : "h-auto"}`}
          >
            <h4 className="text-dark font-secondary flex justify-between">
              Update Service <IoClose onClick={() => closeService()} />
            </h4>
            <form onSubmit={(e) => serviceUpdate(e, updateNeed._id)}>
              <div className="team-input">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  defaultValue={updateNeed?.title}
                  name="title"
                />
              </div>
              <div className="team-input">
                <label htmlFor="fDesc">1st Description</label>
                <textarea
                  id="fDesc"
                  defaultValue={updateNeed?.fDesc}
                  name="fDesc"
                />
              </div>
              <div className="team-input">
                <label htmlFor="sDesc">2nd Description</label>
                <textarea
                  id="sDesc"
                  defaultValue={updateNeed?.sDesc}
                  name="sDesc"
                />
              </div>
              <button className="btn-primary">Update</button>
            </form>
          </div>
        </div>
        <div className="add-team">
          <h4 className="text-dark font-secondary">Add Services</h4>
          <form onSubmit={servicePost}>
            <div className="team-input">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="team-input">
              <label htmlFor="fDesc">First Description</label>
              <textarea name="fDesc" id="fDesc"></textarea>
            </div>
            <div className="team-input">
              <label htmlFor="sDesc">Second Description</label>
              <textarea name="sDesc" id="sDesc"></textarea>
            </div>
            <div className="team-input">
              <label htmlFor="working" className="label">
                Working With
              </label>
              {filedInput.map((data, i) => {
                return (
                  <div key={i}>
                    <label htmlFor="team-name">* Member Name</label>
                    <input
                      type="text"
                      name="team-name"
                      value={data.name}
                      onChange={(e) => changeInput(e, i, "name")}
                    />
                    <br />
                    <br />
                    <label htmlFor="team-desc">
                      * Member Description (Short)
                    </label>
                    <textarea
                      name="team-desc"
                      value={data.description}
                      onChange={(e) => changeInput(e, i, "description")}
                    ></textarea>
                  </div>
                );
              })}
              <p className="btn-primary add-btn" onClick={() => addInput()}>
                Add Team
              </p>
            </div>
            <div className="team-input">
              <label htmlFor="working" className="label">
                Features
              </label>
              {filedInputF.map((data, i) => {
                return (
                  <div key={i}>
                    <input
                      type="text"
                      name="feature"
                      onChange={(e) => changeInputF(e, i)}
                    />
                  </div>
                );
              })}
              <p className="btn-primary add-btn" onClick={() => addInputF()}>
                Add Feature
              </p>
            </div>
            <div className="team-input">
              <label htmlFor="category" className="label">
                Category
              </label>
              <select name="category" id="category" defaultValue={"Select"}>
                <option disabled>Select</option>
                <option value="web-development">Web Development</option>
                <option value="web-design">Web Design</option>
                <option value="software-development">
                  Software Development
                </option>
                <option value="graphics">Graphics Design</option>
                <option value="marketing">Digital Marketing</option>
                <option value="shopify">Shopify E-Commerce</option>
              </select>
            </div>
            <div className="team-input">
              <label htmlFor="photo">First Photo</label>
              <div
                className="photo-box"
                onClick={() => document.querySelector(".photo").click()}
              >
                <input
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                  type="file"
                  name="photo"
                  id="image"
                  draggable="true"
                  className="photo"
                  hidden
                />
                {avatar ? (
                  <Image
                    className="preview"
                    src={preview}
                    width={100}
                    height={100}
                    alt="Web Developer"
                  />
                ) : (
                  <>
                    <p className="photo-upload-text">Upload First Photo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.75 9.6875C7.88705 9.6875 7.1875 10.387 7.1875 11.25C7.1875 12.1129 7.88705 12.8125 8.75 12.8125C9.61295 12.8125 10.3125 12.1129 10.3125 11.25C10.3125 10.387 9.61295 9.6875 8.75 9.6875ZM5.3125 11.25C5.3125 9.35153 6.85153 7.8125 8.75 7.8125C10.6485 7.8125 12.1875 9.35153 12.1875 11.25C12.1875 13.1485 10.6485 14.6875 8.75 14.6875C6.85153 14.6875 5.3125 13.1485 5.3125 11.25Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6825 19.5059C11.1203 21.2553 9.49096 23.648 7.7684 26.7098C7.51451 27.161 6.94289 27.321 6.49164 27.0671C6.04039 26.8131 5.8804 26.2416 6.13428 25.7904C7.89296 22.6645 9.59805 20.1448 11.2839 18.257C12.9655 16.3739 14.6736 15.068 16.4492 14.4531C18.259 13.8264 20.066 13.9438 21.8476 14.7743C23.598 15.5901 25.2939 17.0785 26.9781 19.1451C27.3051 19.5465 27.245 20.1371 26.8436 20.4641C26.4422 20.7913 25.8517 20.731 25.5246 20.3296C23.9339 18.3776 22.45 17.1238 21.0555 16.4736C19.6922 15.8383 18.389 15.7656 17.0629 16.2249C15.7025 16.696 14.2489 17.7519 12.6825 19.5059Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.05155 4.55148C3.16508 3.43795 4.67531 2.8125 6.25 2.8125H15.35C15.8678 2.8125 16.2875 3.23224 16.2875 3.75C16.2875 4.26776 15.8678 4.6875 15.35 4.6875H6.25C5.17253 4.6875 4.13921 5.11546 3.37738 5.8773C2.61553 6.63915 2.1875 7.67254 2.1875 8.75V21.25C2.1875 22.3274 2.6155 23.3606 3.37738 24.1225C4.13926 24.8845 5.17259 25.3125 6.25 25.3125H21.25C22.3274 25.3125 23.3608 24.8845 24.1226 24.1225C24.8845 23.3606 25.3125 22.3274 25.3125 21.25V15C25.3125 14.4823 25.7323 14.0625 26.25 14.0625C26.7678 14.0625 27.1875 14.4823 27.1875 15V21.25C27.1875 22.8247 26.562 24.3349 25.4485 25.4484C24.335 26.5619 22.8248 27.1875 21.25 27.1875H6.25C4.67524 27.1875 3.16503 26.5619 2.05155 25.4484C0.938061 24.3349 0.3125 22.8247 0.3125 21.25V8.75C0.3125 7.1753 0.93804 5.66499 2.05155 4.55148Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.4375 0.0999451C23.9553 0.0999451 24.375 0.519677 24.375 1.03744V11.0374C24.375 11.5552 23.9553 11.9749 23.4375 11.9749C22.9197 11.9749 22.5 11.5552 22.5 11.0374V1.03744C22.5 0.519677 22.9197 0.0999451 23.4375 0.0999451Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.7756 0.374531C23.1417 0.00841633 23.7352 0.00841633 24.1013 0.374531L28.1013 4.37454C28.4674 4.74065 28.4674 5.33424 28.1013 5.70036C27.7352 6.06648 27.1417 6.06648 26.7756 5.70036L23.4384 2.36326L20.1013 5.70036C19.7352 6.06648 19.1416 6.06648 18.7756 5.70036C18.4094 5.33424 18.4094 4.74065 18.7756 4.37454L22.7756 0.374531Z"
                        fill="#9E9C9C"
                      />
                    </svg>
                  </>
                )}
              </div>
            </div>
            <div className="team-input">
              <label htmlFor="photo2">Second Photo</label>
              <div
                className="photo-box"
                onClick={() => document.querySelector(".photo2").click()}
              >
                <input
                  onChange={(e) => {
                    setAvatar2(e.target.files[0]);
                    setPreview2(URL.createObjectURL(e.target.files[0]));
                  }}
                  type="file"
                  name="photo2"
                  id="image2"
                  draggable="true"
                  className="photo2"
                  hidden
                />
                {avatar2 ? (
                  <Image
                    className="preview"
                    src={preview2}
                    alt="Web Developer"
                    width={100}
                    height={100}
                  />
                ) : (
                  <>
                    <p className="photo-upload-text">Upload Second Photo</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.75 9.6875C7.88705 9.6875 7.1875 10.387 7.1875 11.25C7.1875 12.1129 7.88705 12.8125 8.75 12.8125C9.61295 12.8125 10.3125 12.1129 10.3125 11.25C10.3125 10.387 9.61295 9.6875 8.75 9.6875ZM5.3125 11.25C5.3125 9.35153 6.85153 7.8125 8.75 7.8125C10.6485 7.8125 12.1875 9.35153 12.1875 11.25C12.1875 13.1485 10.6485 14.6875 8.75 14.6875C6.85153 14.6875 5.3125 13.1485 5.3125 11.25Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6825 19.5059C11.1203 21.2553 9.49096 23.648 7.7684 26.7098C7.51451 27.161 6.94289 27.321 6.49164 27.0671C6.04039 26.8131 5.8804 26.2416 6.13428 25.7904C7.89296 22.6645 9.59805 20.1448 11.2839 18.257C12.9655 16.3739 14.6736 15.068 16.4492 14.4531C18.259 13.8264 20.066 13.9438 21.8476 14.7743C23.598 15.5901 25.2939 17.0785 26.9781 19.1451C27.3051 19.5465 27.245 20.1371 26.8436 20.4641C26.4422 20.7913 25.8517 20.731 25.5246 20.3296C23.9339 18.3776 22.45 17.1238 21.0555 16.4736C19.6922 15.8383 18.389 15.7656 17.0629 16.2249C15.7025 16.696 14.2489 17.7519 12.6825 19.5059Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.05155 4.55148C3.16508 3.43795 4.67531 2.8125 6.25 2.8125H15.35C15.8678 2.8125 16.2875 3.23224 16.2875 3.75C16.2875 4.26776 15.8678 4.6875 15.35 4.6875H6.25C5.17253 4.6875 4.13921 5.11546 3.37738 5.8773C2.61553 6.63915 2.1875 7.67254 2.1875 8.75V21.25C2.1875 22.3274 2.6155 23.3606 3.37738 24.1225C4.13926 24.8845 5.17259 25.3125 6.25 25.3125H21.25C22.3274 25.3125 23.3608 24.8845 24.1226 24.1225C24.8845 23.3606 25.3125 22.3274 25.3125 21.25V15C25.3125 14.4823 25.7323 14.0625 26.25 14.0625C26.7678 14.0625 27.1875 14.4823 27.1875 15V21.25C27.1875 22.8247 26.562 24.3349 25.4485 25.4484C24.335 26.5619 22.8248 27.1875 21.25 27.1875H6.25C4.67524 27.1875 3.16503 26.5619 2.05155 25.4484C0.938061 24.3349 0.3125 22.8247 0.3125 21.25V8.75C0.3125 7.1753 0.93804 5.66499 2.05155 4.55148Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.4375 0.0999451C23.9553 0.0999451 24.375 0.519677 24.375 1.03744V11.0374C24.375 11.5552 23.9553 11.9749 23.4375 11.9749C22.9197 11.9749 22.5 11.5552 22.5 11.0374V1.03744C22.5 0.519677 22.9197 0.0999451 23.4375 0.0999451Z"
                        fill="#9E9C9C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.7756 0.374531C23.1417 0.00841633 23.7352 0.00841633 24.1013 0.374531L28.1013 4.37454C28.4674 4.74065 28.4674 5.33424 28.1013 5.70036C27.7352 6.06648 27.1417 6.06648 26.7756 5.70036L23.4384 2.36326L20.1013 5.70036C19.7352 6.06648 19.1416 6.06648 18.7756 5.70036C18.4094 5.33424 18.4094 4.74065 18.7756 4.37454L22.7756 0.374531Z"
                        fill="#9E9C9C"
                      />
                    </svg>
                  </>
                )}
              </div>
            </div>
            <button className="btn-primary">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashService;
