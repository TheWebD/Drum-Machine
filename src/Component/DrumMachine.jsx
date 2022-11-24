import React from "react"

class DrumMachine extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            powerBtn: "Off",
            bankBtn: "Off",
            drumPadNames: "",
            bankNames: "",
            volume:  "0.50",
            VValue: "",
            visibility: false,
            volumeFixed: ""
        }

    }
    powerOn(){
        this.setState({
            powerBtn: "Off",
            drumPadNames: "",
            bankNames: "",
        })
    }
    powerOff(){
        this.setState({
            powerBtn: "On",
            drumPadNames: "",
            bankNames: ""
        })
    }
    bankOn(){
        this.setState({
            bankBtn: "Off",
            bankNames: "Heater Kit",
            drumPadNames: ""
        })
    }
    bankOff(){
        this.setState({
            bankBtn: "On",
            bankNames: "Smooth Piano Kit",
            drumPadNames: ""
        })
    }
    volume(event){
        this.setState({
            volume: event.target.value,
            VValue: "Volume: ",
            drumPadNames: ""
        })

        this.setState({
            volumeFixed: this.state.volume * 1000 / 10
        })

        this.setState({
            visibility: true
        })

        setTimeout(() => this.setState({
            visibility: false
        }),500)
    }

    componentDidMount(){
        window.addEventListener('keydown', e => {
            switch(e.key){
                case 'q':
                    this.pressQBtn.click()
                    let q = document.getElementById("pressQBtn");
                    q.style.transform = "#ffa500"
                    setTimeout(() => 
                    q.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'w':
                    this.pressWBtn.click()
                    let w = document.getElementById("pressWBtn");
                    w.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    w.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'e':
                    this.pressEBtn.click()
                    let e = document.getElementById("pressEBtn");
                    e.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    e.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'a':
                    this.pressABtn.click()
                    let a = document.getElementById("pressABtn");
                    a.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    a.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 's':
                    this.pressSBtn.click()
                    let s = document.getElementById("pressSBtn");
                    s.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    s.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'd':
                    this.pressDBtn.click()
                    let d = document.getElementById("pressDBtn");
                    d.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    d.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'z':
                    this.pressZBtn.click()
                    let z = document.getElementById("pressZBtn");
                    z.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    z.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'x':
                    this.pressXBtn.click()
                    let x = document.getElementById("pressXBtn");
                    x.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    x.style.backgroundColor = "#808080"
                    ,100)
                    break;
                case 'c':
                    this.pressCBtn.click()
                    let c = document.getElementById("pressCBtn");
                    c.style.backgroundColor = "#ffa500"
                    setTimeout(() => 
                    c.style.backgroundColor = "#808080"
                    ,100)
                    break;
                default:
                    
            }
        })   
    }
    
    pressQ(){
        if(this.state.powerBtn === "On"){
        let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
        audio.play()
        audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Heater 1' : "Chord-1",
                bankNames: ""
            })
        }     
    }
    pressW(){
        if(this.state.powerBtn === "On"){
        let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
        audio.play()
        audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Heater 2' : "Chord-2",
                bankNames: ""
            })
        }
        
    }
    pressE(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Heater 3' : "Chord-3",
                bankNames: ""
            })
        }
        
    }
    pressA(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Heater 4' : "Shaker",
                bankNames: ""
            })
        }
        
    }
    pressS(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Clap' : "Open-HH",
                bankNames: ""
            })
        }
    }
    pressD(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Open-HH' : "Closed-HH",
                bankNames: ""
            })
        }
        
    }
    pressZ(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? `Kick-n'-Hat` : "Punchy-Kick",
                bankNames: ""
            })
        }
       
    }
    pressX(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Kick' : "Side-Stick",
                bankNames: ""
            })
        }
        
    }   
    pressC(){
        if(this.state.powerBtn === "On"){
    let audio = new Audio(this.state.bankBtn === "Off" ? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
    audio.play()
    audio.volume = this.state.volume
            this.setState({
                drumPadNames: this.state.bankBtn === "Off" ? 'Closed-HH' : "Snare",
                bankNames: ""
            })
        }

    }
    render(){
        return(
        <div className="drum-machine" id="drum-machine">
            <div className="logo">
                <span>FCC</span>
                &nbsp;
                <i className="fa-brands fa-free-code-camp"></i>
            </div>
            <div className="content">
                <div className="drum-bank">
                    <div id="pressQBtn" className="drum-pad" onClick={this.pressQ.bind(this)}
                    ref={pressQBtn => this.pressQBtn = pressQBtn}>
                        Q
                        <audio id="Q" className="clip" src="#"></audio>
                    </div>
                    <div id="pressWBtn" className="drum-pad" onClick={this.pressW.bind(this)}
                    ref={pressWBtn => this.pressWBtn = pressWBtn}>
                        W
                        <audio id="W" className="clip" src="#"></audio>
                    </div>
                    <div id="pressEBtn" className="drum-pad" onClick={this.pressE.bind(this)}
                    ref={pressEBtn => this.pressEBtn = pressEBtn}>
                        E
                        <audio id="E" className="clip" src="#"></audio>
                    </div>
                    <div id="pressABtn" className="drum-pad" onClick={this.pressA.bind(this)}
                    ref={pressABtn => this.pressABtn = pressABtn}>
                        A
                        <audio id="A" className="clip" src="#"></audio>
                    </div>
                    <div id="pressSBtn" className="drum-pad" onClick={this.pressS.bind(this)}
                    ref={pressSBtn => this.pressSBtn = pressSBtn}>
                        S
                        <audio id="S" className="clip" src="#"></audio>
                    </div>
                    <div id="pressDBtn" className="drum-pad" onClick={this.pressD.bind(this)}
                    ref={pressDBtn => this.pressDBtn = pressDBtn}>
                        D
                        <audio id="D" className="clip" src="#"></audio>
                    </div>
                    <div id="pressZBtn" className="drum-pad" onClick={this.pressZ.bind(this)}
                    ref={pressZBtn => this.pressZBtn = pressZBtn}>
                        Z
                        <audio id="Z" className="clip" src="#"></audio>
                    </div>
                    <div id="pressXBtn" className="drum-pad" onClick={this.pressX.bind(this)}
                    ref={pressXBtn => this.pressXBtn = pressXBtn}>
                        X
                        <audio id="X" className="clip" src="#"></audio>
                    </div>
                    <div id="pressCBtn" className="drum-pad" onClick={this.pressC.bind(this)}
                    ref={pressCBtn => this.pressCBtn = pressCBtn}>
                        C
                        <audio id="C" className="clip" src="#"></audio>
                    </div>
                </div>
                <div className="drum-machine-controller">
                    <div className="power">
                        <h3>Power</h3>
                        <div className="select">
                            <div id="off" className="left" style={{
                                opacity: this.state.powerBtn === "Off" ? "1" : "0",
                                cursor: this.state.powerBtn === "On" ? ""  : "pointer"
                            }} onClick={this.powerOff.bind(this)}> <span>OFF</span>
                            </div>
                            <div id="on" className="right" style={{
                                opacity: this.state.powerBtn === "On" ? "1"  : "0",
                                cursor: this.state.powerBtn === "On" ? "pointer"  : ""
                            }} onClick={this.powerOn.bind(this)}> <span>ON</span>
                            </div>
                        </div>
                    </div>
                    <div className="display-Container">
                        <h3 className="display" id="display">
                            <span>{this.state.drumPadNames}</span>
                            <span>{this.state.bankNames}</span>
                            <span>{
                            this.state.visibility && true ? this.state.VValue + this.state.volumeFixed : ""
                            }</span>
                        </h3>
                    </div>
                    <div className="volume-slider">
                        <input onChange={this.state.powerBtn === "Off" ? "" : this.volume.bind(this)} min="0" max="1" value={this.state.volume} step="0.01"  type="range" />
                    </div>
                    <div className="bank">
                        <h3>Bank</h3>
                        <div className="select">
                            <div id="off" style={{
                                 opacity: this.state.bankBtn === "Off" ? "1"  : "0",
                                 cursor: this.state.bankBtn === "On" ? ""  : "pointer"
                            }} className="left" onClick={this.state.powerBtn === "Off" ? "" : this.bankOff.bind(this)}>
                                <span>1</span>
                            </div>
                            <div id="on" style={{
                                 opacity: this.state.bankBtn === "On" ? "1"  : "0",
                                 cursor: this.state.bankBtn === "On" ? "pointer"  : ""
                            }} className="right" onClick={this.state.powerBtn === "Off" ? "" : this.bankOn.bind(this)}>
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        )
    }
}

export {DrumMachine}