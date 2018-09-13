import * as React from "react";

class ClientDetailBlog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="col-sm-12 page-detail-blog">
                    <div className="row page-detail-blog_banner" style={{
                        backgroundImage: 'url(https://cdnwp.tonyrobbins.com/wp-content/uploads/2018/09/Girl-Hunger_BlogBanner1.jpg)',
                        paddingTop: 128,
                        paddingBottom: 128,
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                    </div>
                    <div className="row" style={{
                        background: '#f5f5f5 none repeat scroll 0 0',
                        fontSize: '25px',
                        padding: '38px 0 37px',
                        textAlign: 'center'
                    }}>
                        <div className="container-fluid" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <p>Ready to take the initiative &amp; join our newsletter?</p>
                            <a href="#" className="btn btn-info newsletter">Sign Up Now</a>
                        </div>
                    </div>
                    <div className="row page-detail-blog_content paddingY-128">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 page-detail-blog_content_title">
                                    <p>HUNGER IS STILL THE #1 ISSUE IN AMERICA</p>
                                    <p>WHY I CONTINUE TO PARTNER WITH FEEDING AMERICA TO FEED PEOPLE AND FAMILIES IN
                                        NEED</p>
                                    <span className="article-author">
                                        Posted by <b>Tony Robbins</b>
                                    </span>
                                </div>
                                <div className="col-xs-12 page-detail-blog_content_body">
                                    Hi, it’s Tony. I want to share a short message with you about what I believe is
                                    still the #1 social issue in America: the hunger crisis.

                                    One out of every 8 people in America – and 1 in 6 children – struggles with hunger.
                                    They are “food insecure,” which means that they have limited or uncertain
                                    availability of nutritionally adequate foods. It means they do not have access, at
                                    times, to enough food to lead active, healthy lives – to do everything that they
                                    want to do in their day. Not enough energy to work, to grow, to flourish.

                                    Imagine for a moment what that feels like. To feel tired, deeply fatigued and
                                    continuously running on empty. To want more in life, but not have the physical
                                    energy to work to obtain it.

                                    Now think about living with a constant feeling of uncertainty, not knowing where
                                    your next meal is coming from. To go through your day without the basic comfort of
                                    having nutritious food available to you, with no control over what you can put in
                                    your body as fuel for your life. Imagine what it would feel like to have total
                                    insecurity over this basic need.

                                    I know what that feels like.
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row page-detail-blog_author">
                        <div className="container paddingY-64">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="media" style={{border: 'none'}}>
                                        <div className="media-left">
                                            <a>
                                                <img alt="64x64" className="media-object"
                                                     src="https://secure.gravatar.com/avatar/c0308f547359f5bdc519a301b32ba34c?s=96&d=mm&r=g"
                                                     data-holder-rendered="true"
                                                     style={{width: '128px', height: '128px', borderRadius: '100%'}}/> </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading">Media heading</h4> Tony Robbins is an
                                            entrepreneur, bestselling author, philanthropist and the nation’s #1 Life
                                            and Business Strategist. Author of five internationally bestselling books,
                                            including the recent New York Times #1 best-seller UNSHAKEABLE, Mr. Robbins
                                            has empowered more than 50 million people from 100 countries through his
                                            audio, video and life training programs. He created the #1 personal and
                                            professional development program of all time, and more than 4 million people
                                            have attended his live seminars.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClientDetailBlog