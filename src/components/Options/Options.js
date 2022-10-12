import { toast } from 'react-toastify'
let alreadyAnsId = [];
let allCorrectAnsId = [];
let allWrongAnsId = [];
const Options = ({ option, id, ans, handlerCurrentResult }) => {
    const addedOrNot = () => {
        const found = alreadyAnsId.find(ans => ans === id);
        if (found) {
            toast.warning('You already ans this question', { autoClose: 800 });
            return;
        }
        else {
            alreadyAnsId.push(id)
            localStorage.setItem('already-ans', JSON.stringify(alreadyAnsId.length));
            if (option === ans) {
                allCorrectAnsId.push(id);
                localStorage.setItem('correct-ans', JSON.stringify(allCorrectAnsId.length));
            }
            else {
                allWrongAnsId.push(id);
                localStorage.setItem('wrong-ans', JSON.stringify(allWrongAnsId.length));
            }
        }
    }
    const chooseAns = (e) => {
        if (option !== ans) {
            e.target.style.backgroundColor = 'red'
            addedOrNot();
            toast.error('You Press Wrong Ans', { autoClose: 800 })

        }
        else {
            e.target.style.backgroundColor = 'blue'
            addedOrNot();
            toast.success(`WOW..You Press Correct Ans.. `, { autoClose: 800 })
        }
        handlerCurrentResult();
    }
    return (
        <div>
            <div className=" text-center container  m-4 mx-auto ">
                <div onClick={(e) => { chooseAns(e) }} className=" my-2 flex overflow-hidden rounded-lg bg-slate-700 dark:text-gray-100 hover:bg-sky-700 cursor-pointer">
                    <div className="flex items-center justify-center px-4 bg-violet-400 dark:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                            <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                            <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                            <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <p>{option}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;