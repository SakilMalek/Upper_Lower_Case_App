import React from 'react'

export default function About(props) {
    //Already linked to App.js.............................................
    // const [MyStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle = () => {

    //     if (MyStyle.color == 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode")

    //     }
    // }



    return (
        <div className="container my-3 "  >
            <h2 style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#263621', color: props.Mode === 'light' ? 'black' : 'white' }}>Enable your theme</h2>
            <div style={props.MyStyle} className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#263621', color: props.Mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header" >
                        <button style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#5e8c4d', color: props.Mode === 'light' ? 'black' : 'white' }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong >Analyze your Text.</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.MyStyle}>
                            This app is used to manipulate your text like Uppercase, Lowercase or Delete your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#263621', color: props.Mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#5e8c4d', color: props.Mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.MyStyle}>
                            This is just a prototype or a demo web-app to practice.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#263621', color: props.Mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header">
                        <button style={{ backgroundColor: props.Mode === 'light' ? 'white' : '#5e8c4d', color: props.Mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Device Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.MyStyle}>
                            You can use this app in your devices like Desktop, Phone, I-pad etc..
                        </div>
                    </div>
                </div></div>

            {/* <div className="container">
                <button type="button" className="btn btn-danger my-3 mx-1" onClick={props.toggleStyle}>{props.btnText}</button>
            </div> */}
        </div>
    )
}
