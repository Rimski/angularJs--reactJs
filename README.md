Code chalange for dream box learning
@auther: Tanner Scott Roman Ward

To start:
1) open this directory in terminal 
2) move in to project directory `cd wepPackAngular/`
3) run `npm install` 
4) run `npm run watch`

After our chat the other day about utalizing angular 1x and trying to decide on switching to ng2+ or react; I thought it might be fun to try and build this project in the migration process. I built an angular 1x app and a react app. I did not build the same components in bolth. I integrated react components utalizeing react2angular from -> `https://github.com/coatue-oss/react2angular`.
In order to run react in angular i had to utalize webPack and restructure how i bootstraped the angular app to get it to run bolth.
I have left the react app in the countries-tsrward directory, it is not complete, the islands button does not work. but it runs.To run it run `npm start` from the directory countries-tsrward the components are not the exact same, i cp'd them from one directory to anouther and modified them slightly the main modification is in the export statment, they are export default vs export. aside from that they are pretty much plug and play.  
