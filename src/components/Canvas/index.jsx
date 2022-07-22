import React, { useRef, useEffect } from "react";

const Canvas = ({ shells, name }) => {
  const canvasRef = useRef(null);


  const isMobile =()=>{
    if(window.innerWidth<600)return true
    return false;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = (ctx) => {
    let shellLength = "";

    if (Array.isArray(shells)) {
      shellLength = shells.length;
      // console.log("Shell Length", shellLength);
    }

    let scale = 1
    const offsetX = 20;
    // draw all shells
    for (let i = 0; i < shellLength; i++) {
      let radius = i * 30 + 30;
      // console.log(isMobile())
      let centerX = 240;
      let centerY = 250;
      if(isMobile()){
        
        centerX = window.innerWidth/2 -offsetX
        scale =.7
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius*scale, 0, 2 * Math.PI);
      ctx.strokeStyle = "#808080"; // shell color
      // ctx.fill();
      ctx.lineWidth = 1;
      ctx.stroke();

      // draw electrons
      const startingAngle = 0; //in degrees
      let currentAngle = startingAngle;
      const numElectrons = shells[i];
      const electronRadius = 5;
      let n = 0;
      // console.log(shellLength);
      // console.log(" ");
      while (n < numElectrons) {
        ctx.beginPath();
        let angleAmount = Math.floor(360 / numElectrons);
        // console.log("angleAmount", angleAmount, name,`n:${n}`,`i ${i}`);
        const x = Math.cos(currentAngle * (Math.PI / 180)) * radius*scale;
        const y = Math.sin(currentAngle * (Math.PI / 180)) * radius*scale;
        // draw single electron
        ctx.arc(centerX + x, centerY + y, electronRadius*scale, 0, 2 * Math.PI);

        // ctx.fillStyle = "#1265F0"; // electron color
        ctx.fill();
        currentAngle += angleAmount;
        // console.log(`n ${n}`, name, shells, `X:${x},Y:${y}`);
        n++;
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    

    //Our draw come here
    draw(context);
  }, [draw]);

  return <div>{<canvas ref={canvasRef} height={500} width={600} />}</div>;
};

export default Canvas;
