const genColor = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
     
    document.getElementById('calz').innerHTML = 'rgb(' + a + ',' + b + ',' + c + ')'

    }
    