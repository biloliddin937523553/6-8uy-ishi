const inp = document.getElementById('inp')
const inp1 = document.getElementById('inp1')
const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{

    
    
    const API = `https://dummyjson.com/users?limit=${inp.value}`
    
    
    const getData = async(api)=>{
        
        const res = await fetch(api)
        const data = await res.json()
        return data 
        
    }

    getData(API).then((data)=>{
        let h2 = document.createElement('h2')
        let h1 = document.querySelector('#h2')
        h2.innerHTML = `User limit: ${inp.value}`
        h1.innerHTML = `${inp1.value} yoshdan katta userlar: `
        data.users.map((valu)=>{
            console.log(valu);
            let div = document.createElement('div')
            let h1 = document.createElement('h1')
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let p5 = document.createElement('p')
            
            h1.style.width = '300px'
            const content = document.querySelector('.container2')
            const content3 = document.querySelector('.container3')
            
            h1.innerHTML= 'Ism: '+valu.firstName
            p1.innerHTML = 'Yosh: '+valu.age
            p2.innerHTML = 'Nomer: '+valu.phone
            p3.innerHTML = 'Email: '+valu.email
            p4.innerHTML = 'Tugulgan sanasi: '+valu.birthDate
            p5.innerHTML = 'Manzil: '+ valu.address.address
            
            
            div.append(h1,p3,p5,p1,p2,p4)
            content.append(div,h2)
            h2.classList.add('h2')
            div.classList.add('container')
            content.classList.add('.container2')
            if (valu.age > inp1.value) {
                let di= document.createElement('div')
                let h1 = document.createElement('h1')
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let p3 = document.createElement('p')
                let p4 = document.createElement('p')
                let p5 = document.createElement('p')
                
                h1.innerHTML= 'Ism: '+valu.firstName
                p1.innerHTML = 'Yosh: '+valu.age
                p2.innerHTML = 'Nomer: '+valu.phone
                p3.innerHTML = 'Email: '+valu.email
                p4.innerHTML = 'Tugulgan sanasi: '+valu.birthDate
                p5.innerHTML = 'Manzil: '+valu.address

                content3.append(di)
                
                console.log(valu);
                di.append(h1,p3,p5,p1,p2,p4)
                
                
            } 
            
            
            let h = h1
        // document.body.append(div)
        inp.valu = ''
        inp1.valu = ''
    })
    if(inp.valu <5){
                
        content3.append(h1)
        
        
    }
})
})
