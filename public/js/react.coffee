App = {}
{a, div, h1, p} = React.DOM


App.Footer = React.createClass
    render: ->
        div className: 'container',
            p className: 'copyright', '©2014 Ryan Gasparini / d.b.a. RXGX, LLC'


App.Header = React.createClass
    render: ->
        div className: 'container',
            h1 className: 'identity',
                a href: './', 'Ryan Gasparini'


renderComponents = (names) ->
    for index in names
        name = names[index]
        className = name[0].toUpperCase() + name.slice(1)
        React.renderComponent App[className]({}), document.getElementById(name)


renderComponents ['footer', 'header']
