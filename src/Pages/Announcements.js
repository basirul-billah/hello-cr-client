import { useForm } from 'react-hook-form';
import Notice from '../Components/Notice';
import useNotice from '../hooks/useNotice';

const Announcements = () => {
    const [notices] = useNotice();
    const { register, handleSubmit, resetField } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/announcements`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => console.log(res))

        resetField("title");
        resetField("description");
    };

    return (
        <div>
            <div className="card w-1/2 shadow-xl mx-auto mt-10">
                <label htmlFor="post-notice" className="btn btn-primary modal-button">Write Announcement</label>

                <input type="checkbox" id="post-notice" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        <label htmlFor="post-notice" className="btn btn-primary btn-sm btn-circle absolute right-1 top-1">✕</label>
                        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text" placeholder="Announcement title"
                                className="input input-bordered input-primary"
                                {
                                ...register("title", { required: true })
                                }
                            />
                            <textarea
                                className='textarea textarea-primary my-3'
                                placeholder='Announcement description'
                                {
                                ...register("description", { required: true })
                                }
                            />
                            <div className="modal-action">
                                <input className='btn btn-primary w-full' type="submit" value="POST" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse'>
                {
                    notices.map(notice => <Notice
                        key={notice._id}
                        notice={notice}
                    ></Notice>)
                }
            </div>
        </div>
    );
};

export default Announcements;