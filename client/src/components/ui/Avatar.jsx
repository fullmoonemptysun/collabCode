

const Avatar = ({name, bg, zIndex, marginLeft, version}) =>{

    return (

        <>

        {version === 'l' && <div 
                className="avatar" 
                style={{
                  color: '#000000',
                  backgroundColor: bg,
                  marginLeft: marginLeft,
                  zIndex: zIndex, 
                }}
              >
                {name.split(' ').map(n => n[0]).join('')}
            </div>}


        
        {version === 'c' && <div 
                className="message-avatar" 
                style={{
                  color: '#fffff',
                  borderColor: bg,
                  backgrounColor: '#000000',
                  marginLeft: marginLeft,
                  zIndex: zIndex, 
                }}
              >
                {name.split(' ').map(n => n[0]).join('')}
            </div>}

        </>

        
        
)

}



export default Avatar
