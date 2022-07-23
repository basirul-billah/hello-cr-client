import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useForm } from "react-hook-form";

const Scheduler = () => {
    const [date, setDate] = useState(new Date());
    const { register, handleSubmit, resetField } = useForm();
    const onSubmit = data => {
        console.log(data);
        resetField("eventName");
        resetField("eventDescription");
        resetField("date");
        resetField("time");
    };

    return (
        <div className="mx-20">
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 flex flex-col mt-7 mb-2">
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-6" className="btn btn-primary">Create Event</label>

                    {/* modal */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-primary absolute right-6 top-3">✕</label>
                            <h3 className="font-bold text-lg">Create Event</h3>
                            <hr />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* event name field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Event name</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered input-sm w-full"
                                        {...register("eventName", {
                                            required: {
                                                value: true,
                                                message: 'Event name is required'
                                            },
                                        })
                                        }
                                    />
                                </div>

                                {/* description field */}
                                <div className="form-control w-full m-full">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        className="input-bordered textarea w-full"
                                        {...register("eventDescription")}
                                    />
                                </div>

                                {/* event date */}
                                <div className="flex gap-3">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input
                                            type="date"
                                            className="input input-bordered input-sm w-full"
                                            {...register("date")}
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Time</span>
                                        </label>
                                        <input
                                            type="time"
                                            className="input input-bordered input-sm w-full"
                                            {...register("time")}
                                        />
                                    </div>
                                </div>
                                <input className="btn btn-primary mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

                {/* calender */}
                <div>
                    <div className="flex">
                        <div>
                            <DayPicker
                                mode='single'
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="p-6">
                        <h1 className="text-lg font-bold">Events</h1>
                        <p>02:30 - Mathematical & Probabilistic Analysis</p>
                        <p>02:30 - Mathematical & Probabilistic Analysis</p>
                        <p>02:30 - Mathematical & Probabilistic Analysis</p>
                        <p>02:30 - Mathematical & Probabilistic Analysis</p>
                        <p>02:30 - Mathematical & Probabilistic Analysis</p>
                        <p>02:30 - Mathematical & Probabilistic Analysis</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Scheduler;