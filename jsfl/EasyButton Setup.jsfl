﻿/*
 * EasyButton Setup
 * setup for EasyButton Component
 * By Kevin Cao(http://kevincao.com)
 * 2010.1.14
 */

fl.getDocumentDOM().getTimeline().insertFrames(29);

fl.getDocumentDOM().getTimeline().addNewLayer('_hit');
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', '//Place a MovieClip named "_hit" here, or leave it blank.');

layerIndex = fl.getDocumentDOM().getTimeline().addNewLayer('_component');
fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', '//Place EasyButton Component here.');

var layerIndex = fl.getDocumentDOM().getTimeline().addNewLayer("labels");
fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);

fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
fl.getDocumentDOM().getTimeline().insertKeyframe(9);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'down');
fl.getDocumentDOM().getTimeline().insertKeyframe(19);
fl.getDocumentDOM().getTimeline().setFrameProperty('name', 'disabled');

// Select the first frame of default layer
fl.getDocumentDOM().getTimeline().setSelectedFrames([layerIndex + 3, 0, 1]);
