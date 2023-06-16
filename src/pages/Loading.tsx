
function Loading() {
  return (
    <div className="w-full h-screen bg-gray-950 grid place-items-center">
        <p className="text-7xl tracking-wide text-gray-50 loading-container">
            <span
                style={{"--delay": "2s", "--duration": "1s", "--trx": "-2rem"}}
                className="fadein-x-anim"
            >
                <span>O</span></span>
            <span
                style={{"--delay": "2.2s", "--duration": "1s", "--trx": "-1.6rem"}}
                className="fadein-x-anim"
            ><span>r</span></span>
            <span
                style={{"--delay": "2.4s", "--duration": "1s", "--trx": "-1.2rem"}}
                className="fadein-x-anim"
            ><span>b</span></span>
            <span
                style={{"--delay": "2.6s", "--duration": "1s", "--trx": "-0.8rem"}}
                className="fadein-x-anim"
            ><span>y</span></span>
            <span
                style={{"--delay": "2.8s", "--duration": "1s", "--trx": "-0.4rem"}}
                className="fadein-x-anim"
            ><span>x</span></span>
        </p>
    </div>
  )
}

export default Loading