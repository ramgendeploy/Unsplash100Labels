function Header() {
    return React.createElement(
        'nav',
        { className: 'title' },
        React.createElement(
            'h1',
            null,
            'Unsplash 100 label classifier'
        ),
        React.createElement(
            'span',
            { className: 'ramaTwitter' },
            React.createElement(
                'a',
                { href: 'https://twitter.com/ramgendeploy', target: '_blank' },
                '@ramgendeploy'
            )
        )
    );
}