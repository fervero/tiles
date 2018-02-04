# Tiles
A simple React component for displaying & searching lists of things. Utilizes Bootstrap 4 for RWD.
Can be viewed live [here](https://fervero.github.io/tiles/).

### Usage

```
//...
import Tiles from './Tiles/Tiles';
//...

    <Tiles model={MOCK_DATA} brand="HTTP Status Codes"/>
//...
```
Where `brand` is the name displayed on the component's navbar, and `model` is an array of tiles to display.
Every tile has the following shape:
```
tile = { name, entries }
```
where `name` is the name of the tile, and `entries` is, again, an array of objects of the following shape:
```
entry = { description, externalURL }
```
Both `description` and `externalURL` (optional) are strings.
