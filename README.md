# hav

HTML Attribute Values

## Install

```
npm install -g hav
```

## Usage

```bash
# Pass a string as stdin and grab its link from the html
> hav link href <<< '<a id="link" href="hello/html" rel="greeting">link</a>'
hello/html

# Get the rel attribute instead of the href attribute
> hav link rel <<< '<a id="link" href="hello/html" rel="greeting">link</a>'
greeting
```

```bash
# Grab a#wind.href from a web site
> curl https://amorris.ca/launch | hav wind href
https://www.windfinder.com/forecast/jericho_beach_park

# Open a#wind.href on a mac
> curl https://amorris.ca/launch | hav wind href | xargs open
https://www.windfinder.com/forecast/jericho_beach_park

curl https://hav.amorris.ca/ | hav .header
curl https://hav.amorris.ca/ | hav .pre text
curl https://hav.amorris.ca/ | hav ^h2 name
curl https://hav.amorris.ca/ | hav ~why text
curl https://hav.amorris.ca/ | hav ~usage text
curl https://amorris.ca/launch/ | hav ^a href
curl https://amorris.ca/launch/ | hav ^a id
curl https://amorris.ca/launch/ | hav music href
```
