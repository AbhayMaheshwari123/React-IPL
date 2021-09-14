import {createUseStyles} from 'react-jss';

const useStyles=createUseStyles({
    container:{
        display:'flex',
        flexDirection:'column',
      
    },
    teamcard:{
        display:'flex',
        border:'1px groove black',
        borderRadius:'9px',
        marginTop:'5%'
    },
    home:{
        display:'none',
    },
    venue:{
        display:'none',
    },
    logo:{
        width:'18%',
        margin:'3% 3% 3% 0',
    },
    teamname:{
        marginTop:'5%',
        marginBottom:'1%'
    },
    win:{
        marginTop:'3%',
        marginBottom:'2%',
        border:'1px groove black',
        width:'max-content',
        borderRadius:'9px'
    },
    '@media screen and (min-width:480px)':{
        container:{
            width: '100%',
            display: 'flex',
            flexWrap:'wrap',
            justifyContent:'space-evenly',
            flexDirection:'row'
    
        },
        teamcard:{
            flexDirection: 'column',
            width: '40%',
        },
        home:{
            display:'flex',
            flexDirection:'column',
            textAlign:'center'
        },
        venue:{
            display:'flex',
            flexDirection:'column',
            textAlign:'center'
        },
        logo:{
            width:'35%',
            margin:'-2% auto 3% auto',
        },
        teamname:{
            textAlign:'center',
            fontSize:'large',
        },
        win:{
            margin:'0 auto 0 auto'
        }
    },
    '@media screen and (min-width:720px)':{
        teamcard:{
            width:'30%'
        }
    },
    '@media screen and (min-width:940px)':{
        teamcard:{
            width:'20%'
        }
    }
})





export default useStyles