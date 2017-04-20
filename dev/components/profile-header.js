import React from 'react';

export default class ProfileHeader extends React.Component {

	render() {
		return (
			<div className="row user-header p-y-2">
	      <div className="col-md-offset-2 col-md-8 p-y-4">
	        <div className="media">
            <div className="media-left">
              <a href="#">
                <img
									className="media-object"
									src="https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:max/Qc3KntVRMCp55EJTAvyg"
									alt="profile-pic"
								/>
              </a>
            </div>
            <div className="media-body p-l-6">
              <h2 className="media-heading m-t-15">Main gallery</h2>
            </div>
          </div>
        </div>
	    </div>
		);
	}
}