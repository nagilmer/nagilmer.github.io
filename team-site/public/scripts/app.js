"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app.js is running');

var Team = function (_React$Component) {
    _inherits(Team, _React$Component);

    function Team(props) {
        _classCallCheck(this, Team);

        var _this = _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, props));

        _this.state = {
            leadership: [{ name: "Bossman Jones",
                title: "CEO",
                photo: "img/model-012.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }],
            product: [{ name: "Freddie McMurray",
                title: "VP of product",
                photo: "img/model-010.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }, { name: "Janet VanZoren",
                title: "Director of Product",
                photo: "img/model-011.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }, { name: "Brian May",
                title: "Senior Product Manager",
                photo: "img/model-002.png",
                location: "Berlin",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013" }, { name: "Nadine Gilmer",
                title: "Senior Product Designer",
                photo: "img/nadine.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013" }],
            marketing: [{ name: "Chloe Grimaldi",
                title: "Senior Product Designer",
                photo: "img/model-001.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }, { name: "Marina Willet",
                title: "Senior Product Designer",
                photo: "img/model-003.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }, { name: "Becka Temitope",
                title: "Senior Product Designer",
                photo: "img/model-007.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013" }],
            engineering: [{ name: "Peter Berg",
                title: "Senior Product Designer",
                photo: "img/model-004.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }, { name: "Christina Lucasr",
                title: "Senior Product Designer",
                photo: "img/model-005.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2015" }, { name: "Rose Fitzroy",
                title: "Senior Product Designer",
                photo: "img/model-006.png",
                location: "San Francisco",
                description: "I've paid my dues. Time after time. I've done my sentence. But committed no crime. And bad mistakes ‒ I've made a few. I've had my share of sand kicked in my face But I've come through.",
                startdate: "2013" }]
        };
        return _this;
    }

    _createClass(Team, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Acme Team"
                ),
                React.createElement(Org, { org: this.state.leadership, title: "Leadership" }),
                React.createElement(Org, { org: this.state.product, title: "Product" }),
                React.createElement(Org, { org: this.state.marketing, title: "Marketing" }),
                React.createElement(Org, { org: this.state.engineering, title: "Engineering" })
            );
        }
    }]);

    return Team;
}(React.Component);

var Org = function (_React$Component2) {
    _inherits(Org, _React$Component2);

    function Org() {
        _classCallCheck(this, Org);

        return _possibleConstructorReturn(this, (Org.__proto__ || Object.getPrototypeOf(Org)).apply(this, arguments));
    }

    _createClass(Org, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "org" },
                React.createElement(
                    "h2",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "div",
                    { className: "team" },
                    this.props.org.map(function (person) {
                        return React.createElement(Person, { key: person.name, person: person });
                    })
                )
            );
        }
    }]);

    return Org;
}(React.Component);

var Person = function (_React$Component3) {
    _inherits(Person, _React$Component3);

    function Person() {
        _classCallCheck(this, Person);

        return _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).apply(this, arguments));
    }

    _createClass(Person, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "person" },
                React.createElement("img", { className: "profile-pic", src: this.props.person.photo }),
                React.createElement(
                    "h3",
                    { className: "name" },
                    this.props.person.name
                ),
                React.createElement(
                    "div",
                    { className: "info" },
                    React.createElement(
                        "p",
                        null,
                        this.props.person.title
                    ),
                    React.createElement(
                        "p",
                        null,
                        this.props.person.location
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.person.description
                )
            );
        }
    }]);

    return Person;
}(React.Component);

ReactDOM.render(React.createElement(Team, null), document.getElementById('app'));
