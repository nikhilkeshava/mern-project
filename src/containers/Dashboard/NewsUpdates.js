import React, { Component } from 'react'
import Button from '../../components/Button/Button';


export class NewsUpdates extends Component {
    
    state = {
        india:true,
        usa:false,
        netherland:false,
        location:''
    }

    componentDidMount() {
        // this.onClick('in');
      }

    

    india = ()=>{
        this.setState({india:true, usa:false, netherland:false} )
        this.onClick('in');
    }
    usa = ()=>{
        this.setState({india:false, usa:true, netherland:false} )
        this.onClick('us');
    }
    netherland = ()=>{
        this.setState({india:false, usa:false, netherland:true} )
        this.onClick('nl');
    }

    

    onClick = (props) => {

        // const newsTitle1 = document.querySelector('#newsTitle1')
        // const newsHeadlines = document.querySelector('#newsHeadlines')
        // const newsImage = document.querySelector('#newsImage')
        // newsTitle1.textContent = 'loading...'
        // newsHeadlines.textContent = ''
        // newsImage.src=''

        // fetch(`https://newsapi.org/v2/top-headlines?country=${props}&apiKey=dd2d7947f6ef4c0381d84ea09bda759b&pageSize=1`).then((response) => {
        //     response.json().then((data) => {
        //         if (data.error) {
        //             newsTitle1.textContent = data.error
        //         } else {
        //             newsTitle1.textContent = data.articles[0].title
        //             newsHeadlines.textContent = data.articles[0].description
        //             newsImage.src = data.articles[0].urlToImage
        //         }
        //     })
        // })
        
    }


    render() {
        return (
            <div>
                <p style={{fontSize:'20px'}}><strong>News Update</strong></p>
                            <div className='region-wrap' >
                                    <Button className="dash-btn-row" 
                                        color={this.state.india?"#04724D" : "black"}  
                                        onClick={() => { this.india() }}>
                                        India
                                    </Button>
                                    <Button className="dash-btn-row" style={{marginRight:'5px !important'}}
                                        color={this.state.usa?"#04724D" : "black"}    
                                        onClick={() => { this.usa() }}>
                                        Usa
                                    </Button>
                                    <Button className="dash-btn-row" 
                                        color={this.state.netherland?"#04724D" : "black"}     
                                        onClick={() => { this.netherland() }}>
                                        Netherlands
                                    </Button>
                            </div>
                            <div id='news-id' style={{backgroundColor:'#F4F9F5',color:'black', padding:'20px',borderRadius:'10px'}}>
                                <div style={{display:'flex', justifyContent:'spaceBetween'}}>
                                    <img id='newsImage' src='' style={{maxWidth:'120px'}}></img>
                                    <p style={{padding:'10px', fontWeight:700}} id='newsTitle1'></p>
                                </div>
                                <p style={{paddingTop:'10px'}}  id='newsHeadlines'></p>
                            </div>
            </div>
        )
    }
}

export default NewsUpdates
