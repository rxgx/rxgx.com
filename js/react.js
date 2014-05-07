var App = {};
var DOM = React.DOM;


App.Footer = React.createClass({
    render: function() {
        return DOM.div(
            { className: 'container' },
            DOM.p({ className: 'copyright' }, '©2014 Ryan Gasparini / d.b.a. RXGX, LLC')
        )
    }
});


App.Header = React.createClass({
    render: function() {
        return DOM.div(
            { className: 'container' },
            DOM.h1(
                { className: 'identity' },
                DOM.a({ href: './' }, 'Ryan Gasparini')
            )
        );
    }
});

function renderComponents(names) {
    for (var index in names) {
        var className, name;
        name = names[index];
        className = name[0].toUpperCase() + name.slice(1);
        React.renderComponent(App[className]({}), document.getElementById(name));
    }
}

renderComponents(['footer', 'header'])
