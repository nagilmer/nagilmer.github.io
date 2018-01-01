console.log('app.js is running');




class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leadership: [
                {name: "Bossman Jones",
                title: "CEO",
                photo: "img/model-012.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
            ],
            product: [
                {name: "Freddie McMurray",
                title: "VP of product",
                photo: "img/model-010.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
                {name: "Janet VanZoren",
                title: "Director of Product",
                photo: "img/model-011.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
                {name: "Brian May",
                title: "Senior Product Manager",
                photo: "img/model-002.png",
                location: "Berlin",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013"},
                {name: "Nadine Gilmer",
                title: "Senior Product Designer",
                photo: "img/nadine.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013"}
            ],
            marketing: [
                {name: "Chloe Grimaldi",
                title: "Senior Product Designer",
                photo: "img/model-001.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
                {name: "Marina Willet",
                title: "Senior Product Designer",
                photo: "img/model-003.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
                {name: "Becka Temitope",
                title: "Senior Product Designer",
                photo: "img/model-007.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013"}
            ],
            engineering: [
                {name: "Peter Berg",
                title: "Senior Product Designer",
                photo: "img/model-004.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
                {name: "Christina Lucasr",
                title: "Senior Product Designer",
                photo: "img/model-005.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015"},
                {name: "Rose Fitzroy",
                title: "Senior Product Designer",
                photo: "img/model-006.png",
                location: "San Francisco",
                description : "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013"}
            ]
        };
    }
    render (){
        return (
            <div>
                <h1>Acme Team</h1>
                <Org org={this.state.leadership} title='Leadership'/>
                <Org org={this.state.product} title='Product'/>
                <Org org={this.state.marketing} title='Marketing'/>
                <Org org={this.state.engineering} title='Engineering'/>
            </div>
        );
    }
}

class Org extends React.Component {
    render (){
        return (
            <div className="org">
                <h2>{this.props.title}</h2>
                <div className="team">
                {
                    this.props.org.map((person) => <Person key={person.name} person={person}/>)
                }
                </div>
            </div>
        );
    }
}

class Person extends React.Component {
    render (){
        return (
            <div className="person">
                <img className="profile-pic" src={this.props.person.photo}/>
                <h3 className="name">{this.props.person.name}</h3>
                <div className="info">
                    <p>{this.props.person.title}</p>
                    <p>{this.props.person.location}</p>
                </div>
                <p>{this.props.person.description}</p>
            </div>
        );
    }
}

ReactDOM.render(<Team/>, document.getElementById('app'));



