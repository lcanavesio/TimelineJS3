import { loadJS } from "../../core/Load";
import { Media } from "../Media";

export default class Facebook extends Media {
    _loadMedia() {
        var self = this;
        // Loading Message
        this.loadingMessage();

        loadJS(
            "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0",
            function () {
                self.createMedia();
            }
        );
    }

    createMedia() {
        var self = this;
        self._el.content_item = self.domCreate(
            "div",
            "fb-root",
            this._el.content
        );

        var displayHtml = null;
        if (self.data.url.includes("videos")) {
            displayHtml = display(self.data.url, "video");
        }
        if (this.data.url.includes("posts")) {
            displayHtml = display(self.data.url, "post");
        }

        self._el.content_item.innerHTML = displayHtml;

        // After Loaded
        self.onLoaded();
    }
}

function display(url, type) {
    // Add content
    var facebook = "",
        facebook_text = "";

    facebook += facebook_text;
    facebook +=
        "<div class='fb-" +
        type +
        "' data-href='" +
        url +
        "' data-width='560' data-show-text='false'>";
    facebook += "</div>";
    
    return facebook;
}
