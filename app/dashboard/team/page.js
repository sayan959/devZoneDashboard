"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Team.css";
import "../../globals.css"
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const DashTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: teamMember = [], refetch } = useQuery({
    queryKey: ["teamMember"],
    queryFn: async () => {
      const res = await fetch("https://devzoneit-xi.vercel.app/teams");
      const data = await res.json();
      return data;
    },
  });

  const [scaleChange, setScale] = useState(0);
  const [updateNeed, setUpdateContent] = useState();

  const [avatar, setAvatar] = useState();
  const [avtr, setAvtr] = useState();
  const [prev, setPrev] = useState();
  const [preview, setPreview] = useState();

  const [disabledBox, setDisBox] = useState(true);

  const editTeam = (team) => {
    setScale(1);
    setUpdateContent(team);
    setDisBox(false);
  };
  const closeUpdate = () => {
    setScale(0);
    setDisBox(true);
  };

  const teamPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const facebook = form.facebook.value;
    const whatsapp = form.whatsapp.value;
    const git = form.git.value;
    const designation = form.designation.value;
    const role = form.role.value;

    const photo = new FormData();
    photo.append("file", avatar);
    photo.append("upload_preset", "devzone");
    photo.append("cloud_name", "doke1aoji");

    fetch("https://api.cloudinary.com/v1_1/doke1aoji/image/upload", {
      method: "post",
      body: photo,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          const teamMember = {
            fullName,
            email,
            phone,
            facebook,
            whatsapp,
            git,
            designation,
            role,
            photo: data.url,
          };

          fetch("https://devzoneit-xi.vercel.app/add-team", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(teamMember),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(`${teamMember.fullName} is Successfully Added`);
                refetch();
                form.reset();
                setPreview("");
                setAvatar("");
              }
            });
        }
      });
  };
  const teamUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const facebook = form.facebook.value;
    const whatsapp = form.whatsapp.value;
    const git = form.git.value;
    const designation = form.designation.value;
    const role = form.role.value;
    const teamId = updateNeed._id;

    const photo = new FormData();
    photo.append("file", avtr);
    photo.append("upload_preset", "devzone");
    photo.append("cloud_name", "doke1aoji");

    if (avtr != undefined && avtr != "") {
      fetch("https://api.cloudinary.com/v1_1/doke1aoji/image/upload", {
        method: "post",
        body: photo,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.url) {
            const teamMember = {
              fullName,
              email,
              phone,
              facebook,
              whatsapp,
              git,
              designation,
              role,
              photo: data.url,
            };

            fetch(`https://devzoneit-xi.vercel.app/team/${id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(teamMember),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  toast.success(
                    `${teamMember.fullName} is Successfully Updated`
                  );
                  refetch();
                  form.reset();
                  if (avtr == "") {
                    undefined;
                  } else {
                    setPrev("");
                    setAvtr("");
                  }
                  closeUpdate();
                  setUpdateContent("");
                }
              });
          }
        });
    } else {
      const teamMember = {
        fullName,
        email,
        phone,
        facebook,
        whatsapp,
        git,
        designation,
        role,
        photo: updateNeed.photo,
      };

      fetch(`https://devzoneit-xi.vercel.app/team/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(teamMember),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(`${teamMember.fullName} is Successfully Updated`);
            refetch();
            form.reset();
            if (avtr == "") {
              undefined;
            } else {
              setPrev("");
              setAvtr("");
            }
            closeUpdate();
            setUpdateContent("");
          }
        });
    }
  };

  const deleteTeam = (id) => {
    const confirm = window.confirm("Are you sure delete this member");
    if (confirm) {
      fetch(`https://devzoneit-xi.vercel.app/team-delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Member is Deleted");
            refetch();
          }
        });
    }
  };

  return (
    <div className={`dashTeam `}>
      <h4 className="font-secondary text-dark">Team Members</h4>
      <div className="team-control">
        <div className="team-list">
          <div className="team-list-edit">
            <div className="team-list">
              <table>
                <thead>
                    <tr>
                    <th>Sn</th>
                    <td>Photo</td>
                    <td className="name">Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Facebook</td>
                    <td>WhatsApp</td>
                    <td>GitHub</td>
                    <td>Designation</td>
                    <td>Role</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {teamMember.map((team, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>
                        <Image
                          src={team.photo}
                          alt="web developer, web designer,devzone it, devzone it team member, devzone it web service, best web solution agency, bug fixing expert, web agency, frontend developer, backend developer, react developer, full stack web developer, web app, mern, node js, react js, express js, shopify, ecommerce, wordpress, landing design, web software company, digital marketing, graphics design, web developer team, web developer experts, best web agency, web service"
                          width={100}
                          height={100}
                        />
                      </td>
                      <td className="name">{team.fullName}</td>
                      <td>{team?.email ? team.email : "Not Added"}</td>
                      <td>+{team?.phone ? team.phone : "Not Added"}</td>
                      <td>{team?.facebook ? team.facebook : "Not Added"}</td>
                      <td>{team?.whatsapp ? team.whatsapp : "Not Added"}</td>
                      <td>{team?.git ? team.git : "Not Added"}</td>
                      <td>
                        {team?.designation ? team.designation : "Not Added"}
                      </td>
                      <td>{team?.role ? team.role : "Not Added"}</td>
                      <td className="flex gap-5 item-center justify-center h-100">
                        <button
                          onClick={() => editTeam(team)}
                          className="text-primary"
                        >
                          <FaRegEdit />
                        </button>
                        <button onClick={() => deleteTeam(team?._id)}>
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              style={{ transform: `scale(${scaleChange})` }}
              className={`update-team ${scaleChange == 0 ? "h-0" : "h-auto"}`}
            >
              <h4 className="text-dark font-secondary flex justify-between">
                Update Team Member <IoClose onClick={() => closeUpdate()} />
              </h4>
              <form onSubmit={(e) => teamUpdate(e, updateNeed._id)}>
                <div className="team-input">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    defaultValue={updateNeed?.fullName}
                    name="fullName"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    defaultValue={updateNeed?.email}
                    name="email"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    id="phone"
                    defaultValue={updateNeed?.phone}
                    name="phone"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="facebook">Facebook Link</label>
                  <input
                    type="text"
                    id="facebook"
                    defaultValue={updateNeed?.facebook}
                    name="facebook"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="whatsapp">WhatsApp Link</label>
                  <input
                    type="text"
                    id="whatsapp"
                    defaultValue={updateNeed?.whatsapp}
                    name="whatsapp"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="git">GitHub Link</label>
                  <input
                    type="text"
                    id="git"
                    defaultValue={updateNeed?.git}
                    name="git"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    id="designation"
                    defaultValue={updateNeed?.designation}
                    name="designation"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="role">Role</label>
                  <input
                    type="text"
                    id="role"
                    defaultValue={updateNeed?.role}
                    name="role"
                  />
                </div>
                <div className="team-input">
                  <label htmlFor="photo">Photo</label>
                  <div
                    className="photo-box"
                    onClick={() => document.querySelector(".photo").click()}
                  >
                    {disabledBox !== false ? undefined : (
                      <input
                        onChange={(e) => {
                          setAvtr(e.target.files[0]);
                          setPrev(URL.createObjectURL(e.target.files[0]));
                        }}
                        type="file"
                        name="photo2"
                        id="image2"
                        draggable="true"
                        className="photo"
                        hidden
                      />
                    )}

                    {avtr ? (
                      <Image width={100} height={100} className="preview" src={prev} alt="Web Developer" />
                    ) : (
                      <Image width={100} height={100}  src={updateNeed?.photo} alt="Web Developer" />
                    )}
                  </div>
                </div>
                <button className="btn-primary">Update</button>
              </form>
            </div>
          </div>
          <div className="add-team">
            <h4 className="text-dark font-secondary">Add Team Member</h4>
            <form onSubmit={teamPost}>
              <div className="team-input">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="fullName" />
              </div>
              <div className="team-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="team-input">
                <label htmlFor="phone">Phone</label>
                <input type="number" id="phone" name="phone" />
              </div>
              <div className="team-input">
                <label htmlFor="facebook">Facebook Link</label>
                <input type="text" id="facebook" name="facebook" />
              </div>
              <div className="team-input">
                <label htmlFor="whatsapp">WhatsApp Link</label>
                <input type="text" id="whatsapp" name="whatsapp" />
              </div>
              <div className="team-input">
                <label htmlFor="git">GitHub Link</label>
                <input type="text" id="git" name="git" />
              </div>
              <div className="team-input">
                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" name="designation" />
              </div>
              <div className="team-input">
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" />
              </div>
              <div className="team-input">
                <label htmlFor="photo">Photo</label>
                <div
                  className="photo-box"
                  onClick={() => document.querySelector(".photo").click()}
                >
                  {disabledBox ? (
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
                  ) : undefined}
                  {avatar ? (
                    <Image
                      className="preview"
                      src={preview}
                      alt="Web Developer"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <>
                      <p className="photo-upload-text">Upload Your Photo</p>
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
    </div>
  );
};

export default DashTeam;
