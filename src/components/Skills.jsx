import "../App.css";

import {
    FaJava,
    FaReact,
    FaPython,
    FaAngular,
    FaAws,
    FaGuitar,
} from "react-icons/fa";
import { SiMysql, SiRiotgames } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiMountainClimbing } from "react-icons/gi";

export const Skills = () => {
    return (
        <div style={{ width: "100%" }}>
            <h4 className="section-header">Skills</h4>
            <ul>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <FaReact /> Front-End Development
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "100%" }}>
                            <p className="skill-exp">6 years</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <FaJava /> Back-End Development
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "80%" }}>
                            <p className="skill-exp">5 years</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <SiRiotgames /> League of Legends
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "60%" }}>
                            <p className="skill-exp">Platinum</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <GiMountainClimbing /> Climbing
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "45%" }}>
                            <p className="skill-exp">V7 / 5.12a</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <FaGuitar /> Guitar
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "30%" }}>
                            <p className="skill-exp">5 years</p>
                        </div>
                    </div>
                </li>
                <li className="skill">
                    <span className="skill-name secondary-text">
                        <AiOutlineCloudServer /> Unreal Engine
                    </span>
                    <div className="skill-bar">
                        <div className="skill-per" style={{ maxWidth: "20%" }}>
                            <p className="skill-exp">1.5 years</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
