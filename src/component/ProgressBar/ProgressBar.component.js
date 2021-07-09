import React, { useRef, useEffect,useState } from 'react';
import './progress-bar.scss';

function ProgressBar({checkoutStep}) {
    const firstBarRef = useRef();
    const secondBarRef = useRef();
    const thirdBarRef = useRef();
    const numberOneRef = useRef();
    const numberProgressOneRef = useRef();
    const numberTwoRef = useRef();
    const numberProgressTwoRef = useRef();
    const [billingStep,setBillingStep] = useState(false);
    const [detailsStep, setDetailsStep] = useState(false);

    const numberProgressAnimation = (ref) => {
        ref.current.style.width = '30px';
        ref.current.style.height = '30px';
    };
      const progressAnimation = (ref) => {
             ref.current.style.width ='100%';
        };
        const numberAnimation = (ref) => {
            ref.current.style.color = 'white';
        };


    useEffect(()=> {
        if(checkoutStep === "SHIPPING_STEP") {
        setTimeout(()=>progressAnimation(firstBarRef),400)
        setTimeout(()=>{
            numberAnimation(numberOneRef);
            numberProgressAnimation(numberProgressOneRef);
        },900);
    }
    },[checkoutStep]);

    useEffect(()=> {
        if(checkoutStep === "BILLING_STEP") {
            setBillingStep(true);
            progressAnimation(secondBarRef);
            setTimeout(()=>{
                numberAnimation(numberTwoRef);
                numberProgressAnimation(numberProgressTwoRef);
            },500);
        }
    },[checkoutStep]);

    useEffect(()=> {
        if(checkoutStep === "DETAILS_STEP") {
            setDetailsStep(true);
            progressAnimation(thirdBarRef);
        }
    },[checkoutStep]);

    return (
        <div className="progress-bar">
           <div className="bar bar-one">
               <div className="progress bar-one-progress" ref={firstBarRef}/>
           </div>
           <div className="number" ref={numberOneRef}>
            <div className="number-progress" ref={numberProgressOneRef}/>
            <div className="number-one">{billingStep?(<span className="tick">&#10003;</span>):(<>1</>)}</div>
           </div>
           <div className ="bar bar-two">
           <div className="progress bar-two-progress" ref={secondBarRef}/>
           </div>
           <div className="number" ref={numberTwoRef}>
           <div className="number-progress" ref={numberProgressTwoRef}/>
           <div className="number-two">{detailsStep? (<span className="tick">&#10003;</span>):(<>2</>)}</div>
           </div>
           <div className="bar bar-three">
           <div className="progress bar-three-progress" ref={thirdBarRef}/>
           </div>
        </div>
    );
}

export default ProgressBar;