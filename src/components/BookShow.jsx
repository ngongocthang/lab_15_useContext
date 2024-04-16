import BookEdit from "./BookEdit";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import "./bookShow.css"



const BookShow = ({ book, onDelete, onEdit }) => {
    console.log(book);
    const image = `http://picsum.photos/seed/${book.id}/300/200`;
    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = (id, term) => {
        onEdit(id, term);
        setIsEdit(false);
    };
    return (
        <div className='item'>
             {!isEdit && (
                <>
                    <button className="button1" onClick={() => onDelete(book.id)}><FaRegTrashCan /></button>
                    <button className="button2" onClick={() => setIsEdit(!isEdit)}><FaPencilAlt /></button>
                </>
            )}
             {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
            <div className='image'>
                <img src={image} alt="" />
            </div>
            {!isEdit && (
                <>
                    <h2>{book.title}</h2>
                    <p>{book.des}</p>
                </>
            )}
           
           
        </div>
    );
};

export default BookShow;