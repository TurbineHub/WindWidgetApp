# Experience Builder Custom Widget


#### Custom Widget Code

The code for the custom widget is here
https://github.com/TurbineHub/WindWidget

It reuses a a reasonable amount of the work from the windmap repo 
https://github.com/TurbineHub/webmap

and makes use of the API's from 
https://github.com/TurbineHub/webapi

#### Using the Widget

In order to use it in an Experience Builder app, download and install Experience Builder Developer Edition

https://developers.arcgis.com/experience-builder/

Once you have the dev edition install use git to pull the widget code into the correct directory

#### Create a new folder[](https://developers.arcgis.com/experience-builder/guide/create-a-starter-widget/#create-a-new-folder)

The first step to create a new widget is to create a folder for the widget files.

1. In your **file browser**, go to the folder where Experience Builder was extracted.
    

- For detailed instructions on how to install the developer addition of Experience Builder, please see the [documentation](https://developers.arcgis.com/experience-builder/guide/install-guide/).
    
- In the Experience Builder **folder**, expand the following path: **/client/your-extensions/widgets**.
    
- In the **widgets** folder, create a new folder called `turbinehub`. Your folder path should look like this: **/client/your-extensions/widgets/turbinehub.
    

Widget folders cannot include spaces. Learn more about building widgets in the [documentation](https://developers.arcgis.com/experience-builder/).

Mine looks like this 
![Screenshot 2024-07-19 223242](https://github.com/user-attachments/assets/70456485-353f-4823-ac5f-1e0e5fc7f282)


Pull the WindWidget code into turbinehub

#### Open the Experience Builder

Run the experience builder server and client -- follow the guide

https://developers.arcgis.com/experience-builder/guide/install-guide/

Now when you open the app you should see the turbinehub widget in the Custom section of the Insert widget menu

![Screenshot 2024-07-19 223801](https://github.com/user-attachments/assets/33b33915-03dc-481f-8543-af0ab5326e0f)


When you drag the widget into the section you want it to appear in (same as using any other widget)  you will have to configure the Content section 

Select Connect to data
![Screenshot 2024-07-19 223942](https://github.com/user-attachments/assets/fd6b5572-6bf8-44cb-a757-7d2dfc0941ad)

You must select a layer with the same schema as US Onshore Wind Projects (layers come from the map you have added to the page).  This is because the fields used for Latitude, longitude, hub height come from that layers fields.  If you have other layers with the same information in the same fields it will also work,  code in the custom widget that picks out those values shown below

```
 setLat(recId.getFieldValue("avglatitude").toString());
 setLon(recId.getFieldValue("avglongitude").toString());
 setHubHeight(recId.getFieldValue("hubheight1").toString());
```

With that set you should now be able to use the widget in you Experience Builder App.


To deploy the app once you have it configured how you want it, click the 3 dots on the top menu of Experience Builder and select Download


![Screenshot 2024-07-19 224844](https://github.com/user-attachments/assets/4e6c699b-95d1-4419-9ba0-923cb8a43ab7)

That will download a zip file.

Pull The Github repository https://github.com/TurbineHub/WindWidgetApp/ to you development machine.  

Extract the downloaded zip file into the directory you have the WindWidgetApp repo, mine looks like this


![Screenshot 2024-07-19 225150](https://github.com/user-attachments/assets/e14909ce-17c5-4743-90b5-43359d95b29e)

The add, commit and push the code

This should kick off a build and deploy of the code at the WindWidgetApp repo. 
Currently it is not working though,  it looks like the org admin has to enable Pages.

![Screenshot 2024-07-19 222510](https://github.com/user-attachments/assets/bc865f09-1058-443a-9452-7bb94734c78f)

Once that github pages issue is resolved we have the workflow to create and publish Custom Widgets

As previously discussed most of this information is taken from the video and linked resources
https://mediaspace.esri.com/media/t/1_4fbh1eud
