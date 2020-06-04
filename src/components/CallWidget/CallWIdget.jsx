import React, { useState, useEffect } from 'react';
import phone from "./phone.svg";
import { ReactComponent as Menu } from "./menu.svg";
import { ReactComponent as Close } from "./close.svg";


const CallWidget = () => {
    // call details stored in diffent variables 
    // can also be stored as an object
    const [callText, setCallText] = useState('');
    const [callNumber, setCallNumber] = useState('');
    const [showWidget, setShowWidget] = useState(false);

    // function to capitalize a string 
    const capitalize = (str) => {
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    };
    // styling 
    const classes = {
        callWidget: {
            position: 'absolute',
            bottom: '4rem',
            right: '1rem',
            paddingBottom: '2rem',
            paddingLeft: '4rem',
            paddingRight: '4rem',
            background: '#212121',
            borderRadius: '1rem',
            minWidth: '10rem',
            textAlign: 'center'
        }, 
        textHolder: {
            padding: '1rem',
            fontSize: '20px',
            fontWeight: '500',
        },
        numberHolder: {
            fontSize: '1.2rem',
            background: '#232f23',
            color: '#69e230',
            borderRadius: '1rem',
            padding: '0 1rem',
            cursor: 'pointer',
            display: 'flex'
        },
        buttons: {
            background: 'rgb(33, 33, 33)',
            padding: '0.4rem',
            borderRadius: '50%',
            right: '1rem',
            bottom: '0.5rem', position: 'absolute', 
            color: '#fff', cursor: 'pointer'
        },
        img: {
            padding: '0rem 1rem',
            marginTop: '0.4rem',
            background: `url(${phone}) no-repeat`,
        },
        innerCallWidget: {
            color: '#fff',
        }
    }
    /* it will be called once when the component gets mounted  */
    useEffect(() => {
        let text = '';
        let number = ''
        // fetching the details from api
        fetch('https://codifyinditest.com/script_test/api-test/')
            .then(response => response.json())
            .then(data => {
                text = data['script test'] && data['script test'].labels;
                number = data['script test'] && data['script test'].phone_number;
                if (text && number) {
                    setCallText(capitalize(text))
                    setCallNumber((number))
                }
            });
    }, []);
    // this can also be seperated in a different/child component 
    return (<>{showWidget
        ? <div style={classes.callWidget}>
            {callText && callNumber ?
                <div style={classes.innerCallWidget}>
                    <div style={classes.textHolder}>{callText}</div>
                    <span style={classes.numberHolder}>
                        <span style={classes.img} ></span>{callNumber}
                    </span>
                </div>
                : <span style={{ color: '#fff' }}>Something Went Wrong! Please Refresh The Page.</span>}
        </div>
        : ''}
        {/* toggle the Widget to Open Or Close */}
        <div style={classes.buttons} onClick={() => setShowWidget(!showWidget)}>
            {showWidget ? <Close /> : <Menu />}
        </div>
    </>)
}


export default CallWidget;