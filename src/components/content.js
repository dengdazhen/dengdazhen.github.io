const data = {
    intro: ["邓达臻博士是浙江大学软件学院平台“百人计划”研究员，2018年于浙江大学获得数学与应用数学学士学位；2023年于浙江大学获得计算机科学与技术博士学位，师从巫英才教授。博士期间获国家奖学金和浙江省优秀毕业研究生等奖项。主要从事大数据可视分析、AI驱动的可视化生成和大模型安全可视分析的相关研究。在IEEE VIS、IEEE TVCG、ACM KDD、ACM CHI、ACM UIST等CCF-A类可视化、人工智能和人机交互会议/期刊上发表相关论文10余篇，曾获IEEE VIS 2022最佳论文提名奖；相关成果落地应用至中国乒乓球队智能大数据平台中，助力国家队备战国际重要赛事。","I am a tenure-track assistant professor (ZJU 100-Young professor) in the School of Software and Technology at Zhejiang University. I received my Ph.D. at the State Key Lab of CAD&CG, Zhejiang University, under the supervision of Prof. Yingcai Wu. My research interests lie in AI-empowered insight discovery, AI for visualization generation, and visual analytics for AI security."],
    
    contact: [
        {
            src: './imgs/email.png',
            name: 'dengdazhen@outlook.com',
            link: 'mailto:dengdazhen@outlook.com'
        },
        {
            src: './imgs/googlescholar.png',
            name: 'Google Scholar',
            link: 'https://scholar.google.com/citations?user=opQZa-EAAAAJ&hl=en'
        }
    ],
    education: [
        {
            duration: 'Sep. 2018 - June 2023',
            city: 'Hangzhou',
            country: 'China',
            title: 'Ph.D. Student',
            affiliation: 'State Key Lab of CAD&CG, Zhejiang University',
            description: 'Under the supervision of Prof. Yingcai Wu',
            src: './imgs/zju.png'
        },
        {
            duration: 'Sep. 2014 - Jun. 2018',
            city: 'Hangzhou',
            country: 'China',
            title: 'Undergraduate Student',
            affiliation: 'School of Mathematical Sciences, Zhejiang University',
            description: 'BSc of Applied Mathematics',
            src: './imgs/zju.png'
        }
    ],
    news: [
        {
            date: "01/2024",
            content: 'A paper accepted to TVCG.'
        },
        {
            date: "12/2023",
            content: 'A paper accepted to AAAI and a paper accepted to CHI.'
        },
        {
            date: "07/2023",
            content: 'A paper accepted to IEEE VIS 2023 and a paper accepted to ACM UIST.'
        },
        {
            date: "09/2022",
            content: 'A paper accepted to IEEE TVCG.'
        },
        {
            date: "09/2022",
            content: 'Welcome to our panel "Grand Challenges in Visual Analytic Systems" in VIS\'22!'
        },
        {
            date: "07/2022",
            content: "Four papers accepted to IEEE VIS 2022."
        },
        {
            date: "01/2022",
            content: "One paper accepted to IEEE TVCG."
        },
        {
            date: "05/2021",
            content: "One paper accepted to ACM SIGKDD 2021."
        },
        {
            date: "12/2020",
            content: "Started internship at Microsoft Research Asia (Beijing)."
        },
        {
            date: "11/2020",
            content: "One paper accepted to ACM SIGCHI 2021."
        },
        {
            date: "07/2020",
            content: "One paper accepted to IEEE VIS 2020."
        },
        {
            date: "07/2019",
            content: "One paper accepted to IEEE VIS 2019."
        },
        {
            date: "09/2018",
            content: "Started my Ph.D. program at Zhejiang University."
        }
    ],
    experience: [[
        {
            duration: '2023.8至今',
            city: '宁波',
            country: '中国',
            title: '助理教授',
            description: '百人计划研究员',
            affiliation: '浙江大学软件学院',
            src: './imgs/zju.png'
        },
        {
            duration: '2020.12 - 2021.4',
            city: '北京',
            country: '中国',
            title: '科研实习',
            affiliation: '微软亚洲研究院',
            description: '导师：崔为炜',
            src: './imgs/microsoft.png'
        },
        {
            duration: '2018.9 - 2023.6',
            city: '杭州',
            country: '中国',
            title: '直博',
            affiliation: '浙江大学CAD&CG全国重点实验室',
            description: '导师：巫英才',
            src: './imgs/zju.png'
        },
        {
            duration: '2014.9 - 2018.6',
            city: '杭州',
            country: '中国',
            title: '本科',
            affiliation: '浙江大学数学科学学院',
            description: '数学与应用数学专业',
            src: './imgs/zju.png'
        }
    ],[
        {
            duration: 'August 2023 - Present',
            city: 'Ningbo',
            country: 'China',
            title: 'Tenure-track Assistant Professor',
            description: 'ZJU 100-Young professor',
            affiliation: 'School of Software and Technology, Zhejiang University',
            src: './imgs/zju.png'
        },
        {
            duration: 'Dec. 2020 - Apr. 2021',
            city: 'Beijing',
            country: 'China',
            title: 'Research Intern',
            affiliation: 'Microsoft Research Asia',
            description: 'Supervised by Dr. Weiwei Cui',
            src: './imgs/microsoft.png'
        },
        {
            duration: 'Sep. 2018 - June 2023',
            city: 'Hangzhou',
            country: 'China',
            title: 'Ph.D. Candidate',
            affiliation: 'State Key Lab of CAD&CG, Zhejiang University',
            description: 'Supervised by Prof. Yingcai Wu',
            src: './imgs/zju.png'
        },
        {
            duration: 'Sep. 2014 - Jun. 2018',
            city: 'Hangzhou',
            country: 'China',
            title: 'Undergraduate Student',
            affiliation: 'School of Mathematical Sciences, Zhejiang University',
            description: 'BSc of Applied Mathematics',
            src: './imgs/zju.png'
        }
    ]],
    publications: [
        {
            title: 'ChartGPT: Leveraging LLMs to Generate Charts from Abstract Natural Language',
            authors: 'Yuan Tian, Weiwei Cui, Dazhen Deng*, Xinjing Yi, Yurun Yang, Haidong Zhang, and Yingcai Wu* (* denotes corresponding authors)',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A, JCR-Q1)',
            paper_url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10443572',
            video_url: '',
            src: './imgs/chartgpt.png'
        },
        {
            title: 'ViSTec: Video Modeling for Sports Technique Recognition and Tactical Analysis',
            authors: 'Yuchen He, Zeqing Yuan, Yihong Wu, Liqi Cheng, Dazhen Deng*, and Yingcai Wu* (* denotes corresponding authors)',
            conference: 'AAAI 2024 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2402.15952',
            video_url: '',
            src: './imgs/vistec.png'
        },
        {
            title: 'VAID: Indexing View Designs in Visual Analytics System',
            authors: 'Lu Ying, Aoyu Wu, Haotian Li, Zikun Deng, Ji Lan, Jiang Wu, Yong Wang, Huamin Qu, Dazhen Deng*, and Yingcai Wu (* denotes corresponding authors)',
            conference: 'CHI Conference on Human Factors in Computing Systems (ACM SIGCHI 2024, CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2211.02567',
            video_url: '',
            src: './imgs/vaid.png'
        },
        {
            title: 'Grand Challenges in Visual Analytics Applications',
            authors: 'Aoyu Wu, Dazhen Deng, Min Chen, Shixia Liu, Daniel Keim, Ross Maciejewski, Silvia Miksch, Hendrik Strobelt, Fernanda Viegas, and Martin Wattenberg',
            conference: 'IEEE Computer Graphics and Applications',
            paper_url: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10251911&tag=1',
            video_url: '',
            src: './imgs/challenges.png'
        },
        {
            title: 'Visualizing Large-Scale Spatial Time Series with GeoChron',
            authors: 'Zikun Deng, Shifu Chen, Tobias Schreck, Dazhen Deng, Tan Tang, Mingliang Xu, Di Weng, Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A, JCR-Q1)',
            paper_url: 'https://zkdeng.org/publication/geochron/GeoChron.pdf',
            video_url: '',
            src: './imgs/geochron.png'
        },
        {
            title: 'AR-Enhanced Workouts: Exploring Visual Cues for At-Home Workout Videos in AR Environment',
            authors: 'Yihong Wu, Lingyun Yu, Jie Xu, Dazhen Deng, Jiachen Wang, Xiao Xie, Hui Zhang, Yingcai Wu',
            conference: 'UIST 2023 (CCF-A)',
            paper_url: '',
            video_url: '',
            src: './imgs/ARgym.png'
        },
        {
            title: 'Revisiting the Design Patterns of Composite Visualizations',
            authors: 'Dazhen Deng, Weiwei Cui, Xiyu Meng, Mengye Xu, Yu Liao, Haidong Zhang, Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A, JCR-Q1)',
            paper_url: 'https://arxiv.org/pdf/2203.10476.pdf',
            video_url: '',
            src: './imgs/composition.png'
        },
        {
            title: 'DashBot: Insight-Driven Dashboard Generation Based on Deep Reinforcement Learning',
            authors: 'Dazhen Deng, Aoyu Wu, Huamin Qu, and Yingcai Wu',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2208.01232.pdf',
            video_url: 'https://youtu.be/hM4XMU7pv-0',
            src: './imgs/dashbot.png'
        },
        {
            title: 'In Defence of Visual Analytics Systems: Replies to Critics',
            authors: 'Aoyu Wu*, Dazhen Deng*, Furui Cheng, Yingcai Wu, Shixia Liu, and Huamin Qu (* denotes equal contribution)',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2201.09772.pdf',
            video_url: '',
            src: './imgs/critics.png'
        },
        {
            title: 'OBTracker: Visual Analytics of Off-ball Movements in Basketball',
            authors: 'Yihong Wu, Dazhen Deng, Xiao Xie, Moqi He, Jie Xu, Hongzeng Zhang, Hui Zhang, and Yingcai Wu',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://zjuidg.org/source/projects/OBTracker/OBTracker.pdf',
            video_url: '',
            src: './imgs/obtracker.png'
        },
        {
            title: 'MetaGlyph: Automatic Generation of Metaphoric Glyph-based Visualization',
            authors: 'Lu Ying, Xinhuan Shu, Dazhen Deng, Yuchen Yang, Tan Tang, Lingyun Yu, and Yingcai Wu',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2209.05739.pdf',
            video_url: '',
            src: './imgs/metaglyph.png'
        },
        {
            title: 'VisImages: A Fine-Grained Expert-Annotated Visualization Dataset',
            authors: 'Dazhen Deng, Yihong Wu, Xinhuan Shu, Jiang Wu, Siwei Fu, Weiwei Cui, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/visimages/visimages.pdf',
            video_url: '',
            src: './imgs/visimages.png'
        },
        {
            title: 'Tac-Valuer: Knowledge-based Stroke Evaluation in Table Tennis',
            authors: 'Jiachen Wang*, Dazhen Deng*, Xiao Xie, Xinhuan Shu, Yu-Xuan Huang, Le-Wen Cai, Hui Zhang, Min-Ling Zhang, Zhi-Hua Zhou, and Yingcai Wu (* denotes equal contribution)',
            conference: 'The ACM SIGKDD Conference on Knowledge Discovery and Data Mining (ACM SIGKDD 2021, CCF-A)',
            paper_url: 'https://zjuidg.org/source/projects/tacValuer/tacValuer.pdf',
            video_url: '',
            src: './imgs/tac-valuer.png'
        },
        {
            title: 'EventAnchor: Reducing Human Interactions in Event Annotation of Racket Sports Videos',
            authors: 'Dazhen Deng, Jiang Wu, Jiachen Wang, Yihong Wu, Xiao Xie, Zheng Zhou, Hui Zhang, Xiaolong Zhang, and Yingcai Wu',
            conference: 'CHI Conference on Human Factors in Computing Systems (ACM SIGCHI 2021, CCF-A)',
            paper_url: 'https://zjuidg.org/source/projects/eventanchor/eventanchor.pdf',
            video_url: '',
            src: './imgs/eventanchor.png'
        },
        {
            title: 'PassVizor: Toward Better Understanding of the Dynamics of Soccer Passes',
            authors: 'Xiao Xie, Jiachen Wang, Hongye Liang, Dazhen Deng, Shoubin Cheng, Hui Zhang, Wei Chen, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VIS 2020), Vol. 27, Issue 2, Page 1322-1331, 2020 (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/passvizor/passvizor.pdf',
            video_url: '',
            src: './imgs/passvizor.png'
        },
        {
            title: 'Tac-Simur: Tactic-based Simulative Visual Analytics of Table Tennis',
            authors: 'Jiachen Wang, Kejian Zhao, Dazhen Deng, Anqi Cao, Xiao Xie, Zheng Zhou, Hui Zhang, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2019), Vol. 26, Issue 1, Page 407-417, 2020 (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/tacSimur/Tac-Simur.pdf',
            video_url: 'https://www.youtube.com/watch?v=_I6cne3Wd4U&feature=youtu.be',
            src: './imgs/tac-simur.png'
        },
        {
            title: 'ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer',
            authors: 'Yingcai Wu, Xiao Xie, Jiachen Wang, Dazhen Deng, Hongye Liang, Hui Zhang, Shoubin Cheng, and Wei Chen',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2018), Vol. 25, Issue 1, Page 65-75, 2019 (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/forvizor/forvizor.pdf',
            video_url: 'https://www.youtube.com/watch?v=03U7PESGkOQ',
            src: './imgs/forvizor.png'
        },
    ]
};


export default data;