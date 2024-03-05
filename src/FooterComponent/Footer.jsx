import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#232323', color: 'white', width: "100vw", height: "420px",marginTop:"30px" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: "white", fontSize: "15px", padding: "10px 0", margin: "0 0 5px" }}>CONTACT INFO</h3>
                    <p style={{ color: "#AAAAAA", fontSize: "14px", padding: "10px 0", margin: "0 0 3px" }}>(+91) 7877061041</p>
                    <p style={{ color: "#AAAAAA", fontSize: "14px", padding: "10px 0", margin: "0 0 3px" }}>sales@beautybebo.com</p>
                    <p style={{ color: "#AAAAAA", fontSize: "14px", padding: "10px 0", margin: "0 0 3px" }}>Open time: 10:00AM - 7:00PM</p>
                    <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
                        <img style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#dd0285", color: "#ffffff" }} src="https://unbridledacts.org/wp-content/uploads/2021/08/fb-icon.png" alt='facebook' />
                        <img style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#dd0285", color: "#ffffff" }} src="https://cdn2.iconfinder.com/data/icons/social-icons-32/512/instagram_f-1024.png" alt='instagram' />
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: "white", fontSize: "15px", padding: "15px 0", margin: "0 0 5px" }}>QUICK LINKS</h3 >
                    <ul>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/about-us" style={{ color: "#AAAAAA", padding: "2 13px" }}>About us</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/contact" style={{ color: "#AAAAAA", padding: "2 13px" }}>Contact Us</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/terms-and-conditions" style={{ color: "#AAAAAA", padding: "2 13px" }}>Terms & Conditions</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/privacy-policy" style={{ color: "#AAAAAA", padding: "2 13px" }}>Privacy Policy</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/return-policy" style={{ color: "#AAAAAA", padding: "2 13px" }}>Return and Refund Policy</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/shipping-policy" style={{ color: "#AAAAAA", padding: "2 13px" }}>Shipping Policy</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="#"><img src="https://unbridledacts.org/wp-content/uploads/2021/08/fb-icon.png" alt="Facebook Icon" style={{ width: '20px', height: '20px', marginRight: '5px' }} />Facebook</a></li>
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: "white", fontSize: "15px", padding: "15px 0", margin: "0 0 5px" }}>CUSTOMER INFO</h3>
                    <ul>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/customer/account/" style={{ color: "#AAAAAA", padding: "2 13px" }}>My Account</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.shiprocket.in/shipment-tracking/" style={{ color: "#AAAAAA", padding: "2 13px" }}>Track your Order</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/order-return" style={{ color: "#AAAAAA", padding: "2 13px" }}>Order Returns</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/wishlist/" style={{ color: "#AAAAAA", padding: "2 13px" }}>Wishlist</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/blog/" style={{ color: "#AAAAAA", padding: "2 13px" }}>News & Events</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/faqs" style={{ color: "#AAAAAA", padding: "2 13px" }}>FAQ</a></li>
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: "white", fontSize: "15px", padding: "15px 0", margin: "0 0 5px" }}>CATEGORIES</h3>
                    <ul>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/makeup.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Makeup</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/skin.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Skin</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/hair.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Hair</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/personal-care.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Personal Care</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/mom-baby-care.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Mom & Baby Care</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/fragrance.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Fragrance</a></li>
                        <li style={{ color: "#AAAAAA", fontSize: "14px", marginTop: "10px" }}><a href="https://www.beautybebo.com/ayurveda.html?___store=default" style={{ color: "#AAAAAA", padding: "2 13px" }}>Ayurveda</a></li>
                    </ul>
                </div>
            </div>
            <hr style={{ width: "100%", color: "white" }} />
            <img style={{ width: "212px", height: "20px", marginLeft: "23px", marginTop: "20px" }} src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="payment" />
            <h3 style={{width:"214px",height:"27px",fontSize:"17px",color:"white",fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"600px",marginTop:"-10px"}}>Signup For Newsletter</h3>
            <div style={{ display: "flex", gap: "10px", marginLeft: "800px", marginTop: "-40px" }}>
                <input style={{ width: "358px", height: "50px", padding: "0 15px" ,color:"#AAAAAA"}} type="text" placeholder="Signup For Newsletter" />
                <button style={{width:"112px",height:"50px",padding:"0 15px",backgroundColor:"#dd0285",marginRight:"10px"}}>Subscribe</button>
            </div>
        </footer>
    );
}

export default Footer;
