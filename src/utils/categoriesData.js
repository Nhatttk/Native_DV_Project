import knowledge from "../assets/images/knowledge.png";
import emergenvy from "../assets/images/emergencyHelp.png";
import PsycholicalSupport from "../assets/images/PsycholicalSupport.png";
import stories from "../assets/images/stories.png";
import legalInformation from "../assets/images/legalInformation.png";
import supportlocation from "../assets/images/supportlocation.png";
import onlinecounsel from "../assets/images/onlinecounsel.png";
import settings from "../assets/images/settings.png";
import messageIcon from "../assets/images/messageIcon.png";

export const categoriesData = [
    {
        id: 1,
        title: "Knowledge",
        imgUrl: knowledge,
        navigationPath: "KnowLeadgeScreen"
    },
    {
        id: 2,
        title: "Emergency Help",
        imgUrl: emergenvy,
        navigationPath: "PsychiatristDetails"
    },
    {
        id: 3,
        title: "Psychological Support",
        imgUrl: PsycholicalSupport,
        navigationPath: "AllExpertScreen"
    },
    {
        id: 4,
        title: "Stories",
        imgUrl: stories,
        navigationPath: "StorieScreen"
    },
    {
        id: 5,
        title: "Legal Information",
        imgUrl: legalInformation,
        navigationPath: "TermAndCondition"
    },
    {
        id: 6,
        title: "Support Locations",
        imgUrl: supportlocation,
        navigationPath: ""
    },
    {
        id: 7,
        title: "Online Counseling",
        imgUrl: onlinecounsel,
        navigationPath: "OnlineCounsellingScreen"
    },
    {
        id: 8,
        title: "Settings",
        imgUrl: settings,
        navigationPath: "SettingScreen"
    },
    {
        id: 9,
        title: "Message",
        imgUrl: messageIcon,
        navigationPath: ""
    },
]