---
title:  "[ICS4U]Activity 6 for Object Assignment Submission"
date:   2019-11-09 01:05:00
categories:
- School Class
- School_Grade12
- Assignment
- Object
- Computer Science
tags:
- School
- Course
- Computer Science
- Assignment
---

### Objects in JavaFX Activity 6
* JavaFX methods Documentation Page.


### ImageView
* Classes
  - java.lang.Object
  - javafx.scene.Node
* Interfaces that this class implements
  - Styleable
  - EventTarget
* Subclasses
  - N/A
* Is this abstract class.
  - It's not an abstract class.
  - Constructors
      - <b>ImageView():</b> Allocates a new ImageView object.
      - <b>ImageView(Image image):</b> Allocates a new ImageView object using the given image.
      - <b>ImageView(String url):</b> Allocates a new ImageView object with image loaded from the specified URL.
* Method overloading
  - No method overloading
* Method signature of an accessor (getter) and a mutator (setter)
  - <b>Mutator:</b> public final void setFitHeight(double value)
      - Sets the value of the property fitHeight.
  - <b>Accessor:</b> public final double getFitHeight()
      - Gets the value of the property fitHeight.


### Color
* Classes
  - java.lang.Object
  - javafx.scene.paint.Paint
* Interfaces that this class implements
  - Interpolatable<Color>
* Subclasses
  - N/A
* Is this abstract class
  - It's not an abstract class
  - Constructors
     - <b>Color(double red, double green, double blue, double opacity):</b> Creates a new instance of color.
* Method overloading
  - <b>static Color rgb(int red, int green, int blue):</b> Creates an opaque sRGB color with the specified RGB values in the range 0-255.
  - <b>static Color rgb(int red, int green, int blue, double opacity):</b> Creates an sRGB color with the specified RGB values in the range 0-255, and a given opacity.
* Method signature of an accessor (getter) and a mutator (setter)
  - <b>Mutator:</b> N/A
      - Automatically setted when the color has been chosen
  - <b>Accessor:</b> public double getSaturation()
      - Gets the saturation component of this Color.


### MouseEvent
* Classes
  - java.lang.Object
  - java.util.EventObject
  - javafx.event.Event
  - javafx.scene.input.InputEvent
* Interfaces that this class implements
  - public interface Serializable
  - public interface Cloneable
* Subclasses
  - javafx.scene.input.MouseDragEvent
* Is this abstract class
  - It's not an abstract class
  - Constructors
     - <b>MouseEvent(EventType<? extends MouseEvent> eventType, double x, double y, double screenX, double screenY, MouseButton button, int clickCount, boolean shiftDown, boolean controlDown, boolean altDown, boolean metaDown, boolean primaryButtonDown, boolean middleButtonDown, boolean secondaryButtonDown, boolean synthesized, boolean popupTrigger, boolean stillSincePress, PickResult pickResult):</b> Constructs new MouseEvent event with null source and target.
     - <b>MouseEvent(Object source, EventTarget target, EventType<? extends MouseEvent> eventType, double x, double y, double screenX, double screenY, MouseButton button, int clickCount, boolean shiftDown, boolean controlDown, boolean altDown, boolean metaDown, boolean primaryButtonDown, boolean middleButtonDown, boolean secondaryButtonDown, boolean synthesized, boolean popupTrigger, boolean stillSincePress, PickResult pickResult): </b>Constructs new MouseEvent event.
* Method overloading
  - N/A
  - <b>Mutator:</b> N/A
      - Automatically setted when the mouse event happens
  - <b>Accessor:</b> public EventType<? extends MouseEvent> getEventType()
      - Gets the event type of this event. Objects of the same Event class can have different event types. These event types further specify what kind of event occurred.
* Method signature of an accessor (getter) and a mutator (setter)
  - <b>Mutator:</b> public void setDragDetect(boolean dragDetect)
      - Augments drag detection behavior. The value says whether this event will be followed by DRAG_DETECTED event. It has effect only with MOUSE_PRESSED and MOUSE_DRAGGED events.
  - <b>Accessor:</b> public final double getScreenX()
      - Returns absolute horizontal position of the event.
