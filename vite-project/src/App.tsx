import pic from './img/sonic.png';
import './App.css'

function App() {
  

  return (
    <div id="app">
        <div id="container">
            <div id="user">

                <div id="avatar">
                    <img src={pic} alt=""/>
                </div>

                <div id="userInfo">
                    <div id="nameAndTitle">
                        <p id="title">
                            Ching-Che Ni
                        </p>
                        <p>
                            Student
                        </p>
                    </div>
                    <div id="aboutUser">
                        <p> Ching-Che Ni is an student in the Department of Information Management at
                            Tamkang University, Taiwan.
                        </p>
                        <p>He graduated from Huaxing high school in 2022, Taiwan.
                        </p>
                        <p>He has joined the TKU Indie Hot Music in 1st semester of the first grade.
                            Then he changed to TKU string club at the 2nd semester. 
                        </p>
                    </div>
                </div>

            </div>
            <div id="edu">
                <p id="title">
                    Education
                </p>
                <p>
                    Ph.D. – Department of Information Management, Tamkang University
                </p>

            </div>
            <div id="about">
                <div id="contact">
                    <p id="title">
                        Contact
                    </p>
                    <div id="contactInfo">
                        <div id="locate">
                            <p id="title">locate <i id="bi bi-geo-alt"></i></p>
                            <p>
                                Ching-Che Ni 倪靖哲
                            </p>
                            <p>
                                Department of Information Management
                            </p>
                            <p>
                                Tamkang University
                            </p>
                        </div>
                        <div id="email">
                            <p id="title">Email <i id="bi bi-envelope"></i></p>
                            <p>
                                E-mail: sonic.ni0930@gmail.com; sonic.ni0930@yahoo.com.tw
                            </p>
                        </div>
                    </div>
                </div>
                <div id="experiences">

                    <p id="title">
                        Experience
                    </p>

                    <div id="experience">
                        <p id="title">
                            Kindergarten – 2008/09 ~ 2009/09
                        </p>
                        His head bump into urinal and got 11 stitches on forehead.
                    </div>

                    <div id="experience">
                        <p id="title">
                            Kindergarten – 2008/09 ~ 2009/09
                        </p>
                        Got enterovirus at Bejin when he had a journey.
                    </div>

                    <div id="experience">
                        <p id="title">
                            Kindergarten – 2008/09 ~ 2009/09
                        </p>
                        His head bump on scooter and got another 4 stitches. 
                    </div>

                    <div id="experience">
                        <p id="title">
                            Kindergarten – 2008/09 ~ 2009/09
                        </p>
                        Have an eye operation because of the eye's muscle loosen.   
                        Ended in failed.                 
                    </div>

                    <div id="experience">
                        <p id="title">
                            Elementary School – 2010/09 ~ 2015/07
                        </p>
                        Got influenza type A at Karuizawa when he had a journey.
                        He is the first immigrant case in Karuizawa.
                        Get on the local news. 
                    </div>

                    <div id="experience">
                        <p id="title">
                            Senior High School – 2019/09 ~ 2021/07
                        </p>
                       Get caught hugging with girl friend at idroom.
                       Get two Big warnning.
                    </div>

                    <div id="experience">
                        <p id="title">
                            Senior High School – 2019/09 ~ 2021/07
                        </p>
                        Confession to my exgirlfriend on school festival's concert.
                        After broke up it get very awkward because whole shool knew that. 
                    </div>

                    <div id="experience">
                        <p id="title">
                            College – 2022/09 ~ 
                        </p>
                        Still alive
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default App
