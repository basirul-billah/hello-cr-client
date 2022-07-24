import React from 'react';
import { useForm } from 'react-hook-form';

const Forum = () => {
    const { register, handleSubmit, resetField } = useForm();
    const onSubmit = data => {
        console.log(data.issueHeadline);
        resetField("issueHeadline");
        resetField("issueDescription");
    };
    return (
        <div className="mx-20">
            <div className="flex justify-between mt-5">
                <h1 className="text-xl font-bold">Group Forum</h1>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn btn-primary">Raise issue</label>

                {/* modal */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-primary absolute right-6 top-3">✕</label>
                        <h3 className="font-bold text-lg">Raise an issue</h3>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* issue headline field */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Issue Headline</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered input-sm w-full"
                                    {...register("issueHeadline", {
                                        required: {
                                            value: true,
                                            message: 'Issue headline is required'
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
                                    {...register("issueDescription")}
                                />
                            </div>
                            <input className="btn btn-primary mt-3" type="submit" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="card w-3/4 bg-base-100 shadow-xl">
                <div className="flex flex-row">
                    <div className="avatar m-4">
                        <div className="w-8 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='people' />
                        </div>
                    </div>
                    <div>
                        <h1>Basirul Billah</h1>
                        <p>25/072022</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold ml-4">Software Engineering Drive link!</h2>
                <p className='ml-4'>I seem to have lost the drive link folder link. I would be much appreciated if someone can provide the link.</p>
                <hr className="m-5"/>
                <div>
                    <button className="btn btn-primary mx-4 mb-5">Respond</button>
                </div>
            </div>
        </div>
    );
};

export default Forum;