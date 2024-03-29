import React from "react";
import { readLocalStore, saveOnLocalStore } from "../localStorage/localStore";

const AddNoteModal = ({ characterId }) => {

    const inputNote = React.useRef(null);
    const inputCharacterId = React.useRef(null);
    const [showModal, setShowModal] = React.useState(false);
    const [viewDisplay,setViewDisplay] = React.useState(0);
    

    const handleClick = (buttonClicked) => {
        if(buttonClicked === 0) {
            setViewDisplay(buttonClicked);
        }else{
            setViewDisplay(buttonClicked);
        }
    };

    const ModalButton = () => {
        return (
            <>
                <button
                    className="middle none center mr-4 rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => {handleClick(1);setShowModal(true)}}>
                    add note
                </button>
                <button
                    className="middle none center mr-0 rounded-lg bg-gradient-to-tr from-gray-600 to-gray-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() =>{handleClick(0);setShowModal(true)}}>
                    view note
                </button>                
            </>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {};

        formData.user_id = inputCharacterId?.current.value;
        formData.note = inputNote?.current.value;
       
        const _id = inputCharacterId?.current.value;

        const hasNote = readLocalStore(_id);

        if(hasNote){
            saveNote(_id,formData);
        }else{
            saveOnLocalStore(_id,formData);
        }

        setShowModal(false);
    };

    const saveNote = (userID,formData) => {
        const hasNote = readLocalStore(userID);
        if(hasNote){
            const combinedObject = [hasNote, formData ];
            saveOnLocalStore(userID,combinedObject);
        }else{
            saveOnLocalStore(userID,formData);
        }       
    };

    const extractNotes = (array) => {
        const notes = [];
      
        const extractNotesRecursive = (arr, prefix = '-') => {
          arr.forEach((item) => {
            if (Array.isArray(item)) {
              extractNotesRecursive(item,`${prefix}`);
            } else if (item.hasOwnProperty('note')) {
              notes.push(`${prefix} ${item.note}`);
            }
          });
        };

        extractNotesRecursive(array);
        
        return notes.join("%");
      }

    const diplayNotes = () => {
        let notes = "";
        const noteObject = readLocalStore(characterId);
        if(noteObject){
            if(Array.isArray(noteObject)){
                notes = extractNotes(noteObject);
            }else{
                notes = "-"+noteObject.note;
            }
        }

        return notes;
    };

    const CloseButton = () => {
        return(
            <>
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                        Close
                </button>            
            </>
        );
    };

    return (
        <>
            <ModalButton />
            {showModal ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-sm">
            
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-2xl font-semibold">{ viewDisplay && viewDisplay === 1 ? "Add Note" : "View Note"}</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}>
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                </button>
                            </div>

                            {
                                viewDisplay && viewDisplay === 1 ?
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative p-6 flex-auto">
                                                <textarea
                                                    id="Note"
                                                    name="Note"
                                                    rows={8}
                                                    cols={40}
                                                    className="p-2 border border-solid border-blue-700"
                                                    ref={inputNote}
                                                    maxLength={180}
                                                    required
                                                />
                                                <input 
                                                    type="hidden" 
                                                    id="CharacterId" 
                                                    name="CharacterId" 
                                                    value={characterId} 
                                                    ref={inputCharacterId}
                                                    readOnly 
                                                />
                                        </div>

                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <CloseButton />
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit">
                                                    Save
                                            </button>
                                        </div>
                                    </form>
                                :
                                <>
                                    <div className="relative p-6 ">
                                        <p>
                                            <textarea
                                                rows={8}
                                                cols={40}
                                                className="p-2 border border-solid border-blue-700"
                                                defaultValue={(diplayNotes().toString().replaceAll("%","\n"))}
                                                readOnly
                                            />
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <CloseButton />
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
    );
}

export default AddNoteModal;