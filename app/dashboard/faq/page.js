"use client";
import "../team/Team.css";
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const DashFAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data: teamMember = [], refetch } = useQuery({
        queryKey: ["teamMember"],
        queryFn: async () => {
            const res = await fetch("https://devzoneit-xi.vercel.app/faq");
            const data = await res.json();
            return data;
        }
    });
   

    const teamPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.quiz.value;
        const content = form.ans.value;
        const faq = {
            title, content
        }

        fetch("https://devzoneit-xi.vercel.app/add-faq", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(faq)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("FAQ added")
                    refetch();
                    form.reset();
                }
            })

    }

    const deleteTeam = (id) => {
        const confirm = window.confirm("Are you sure delete this FAQ");
        if (confirm) {
            fetch(`https://devzoneit-xi.vercel.app/faq-delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("FAQ is Deleted");
                        refetch();
                    }
                })
        }
    }
    return (
        <div className={`dashTeam `}>
        <h4 className='font-secondary text-dark'>Team Members</h4>
        <div className="team-control">
            <div className="team-list">
                <table>
                    <thead>
                        <tr>
                            <th>Sn</th>
                            <td>Question</td>
                            <td>Answer</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teamMember.map((faq, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{faq?.title ? faq?.title.substring(0, 40) : "Not Added"}...</td>
                                <td>{faq?.content ? faq?.content.substring(0, 50) : "Not Added"}...</td>
                                <td><button className='dltbtn' onClick={() => deleteTeam(faq?._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="add-team">
                <h4 className='text-dark font-secondary'>Add FAQ</h4>
                <form onSubmit={teamPost}>
                    <div className="team-input">
                        <label htmlFor="ques">Question</label>
                        <input type="text" id='ques' name='quiz' />
                    </div>

                    <div className="team-input">
                        <label htmlFor="ans">Answer</label>
                        <textarea id='role' name='ans' />
                    </div>

                    <button className='btn-primary'>Post</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default DashFAQ;