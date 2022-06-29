## Project Proposal: Notable Note Taking Application

### Group 15: Devon, Jamie, Owen, Tim, Nic

The Notable web application allows for time-stamped note taking and synchronous file sharing during live and recorded video presentations. Users can log in to the application and create private or public instances, where they may stream a presentation while sharing supplementary files through the app in real time with limited in-app viewing support. Users attending as audience members will be able to write and share notes during and after a session, with time stamps attached to indicate when, in the video stream, their individual notes are written. This note taking feature allows for users to write detailed notes relevant to a presenter’s spoken/non-visual content. Users will also be able to share these notes with others. While this is a multipurpose application, it is mainly intended to support lectures and conferences with large audiences.

Notable’s target audience is educators and students in a post-secondary context. This application is also useful for other situations featuring one main speaking party and many viewers. This not being limited to formal education, business seminars and large scale presentations (such as TED Talks) naturally fit within the Notable model. With these audiences in mind, the following sample stories have been taken into consideration for Notable’s development:

- As a speaker, I can create a new instance and indicate a video or schedule a live event.
- As a speaker, I can upload PowerPoint slides or notes to an instance alongside a video or before a live event.
- As a viewer, I can select a live instance to join.
- As a viewer, I can take notes during a presentation or video.
- As a viewer, I can view my notes, automatically time stamped and consolidated after the presentation is over so that I can review.
- As a viewer, I can share my notes with another viewer.
- As a viewer, I can log in to view, update, and save my notes.
- As an admin, I can CRUD (create, read, update, delete) any user information.
- As any user, I can login securely using my Google account.
- As a speaker or viewer, I can view a calendar of past and upcoming events.

The main feature of this application is the ability to attend and deliver presentations in front of large audiences either in real time or asynchronously. Presenters will be able to distribute their presentation files so that attendees can follow along and annotate in real-time. In addition, notes that are taken on the aforementioned presentation files will have their time-stamps recorded so that they can be easily reviewed at a later time.

This product has the potential to fill an untouched niche for presentation tools with the functionality it provides as a single application. Currently it is possible for a person to upload presentation slides, watch a stream or video of a lecture, and take notes along with timestamps, all at the same time from a singular device. But doing all three of those tasks requires navigation between separate programs. A student might download PowerPoint slides from Canvas, watch lectures through Zoom, and take notes through Google Docs. With Notable, the desired functions from all three of these applications will be localised into one easy to use program, taking away the inconveniences of multi-app navigation.

Presently, note taking during presentations with multimedia elements can be handled through some combination of pen-to-paper writing and an array of online applications. None of the current approaches fully encapsulate the features we wish to implement through Notable. The non-technological solution to multimedia note-taking is to physically write down personal notes on a piece of paper with a pen. Alternatively, notes can also be written electronically through the use of personal devices, allowing documentation through applications and websites such as Microsoft Word or Google Docs. However, these methods do not record presentation timestamps by default, and do not provide options for taking notes while away from lecture.

In terms of automatic solutions, there are two main styles of timed note-taking linked to content; Twitch-style and SoundCloud-style. In Twitch-style, users chat in real-time while a presenter (known as a streamer) shares a video with the audience. All users can see all chat messages, and once the stream is over, it is archived. New chat messages cannot be added to a Twitch stream after it ends. But users can still view all messages that were sent, timestamped to the point in the stream at which they were posted. Contrast this with SoundCloud-style, where a presenter uploads an audio clip (usually a song or DJ set), and audience members can add public timestamp-bound comments to it. As a listener, you can see the comments pop up at the point in the song the comment-writer set it to. Despite this, Notable’s feature set remains unique, as neither Twitch-style nor SoundCloud-style support in-person events, private instances, or slide uploading/sharing. By offering synchronous file sharing during presentations, lecturers may ensure that their audience is exposed to additional materials without them needing to navigate additional links. Enabling audience members to download files without the need of an additional platform lets them focus more on writing notes based on the speaker’s spoken content.

There is a collection of third-party resources we plan to use in our app. First, we plan to enable video embeds from YouTube, which will use the libraries associated with these platforms to gather data such as timestamps. Secondly, we plan to support Google-based authentication and login (“Log in with Google” button). This involves interaction with the Google Authentication REST API for verification and validation, as well as cryptographic libraries to validate Google’s JWTs. This will allow for a smoother login experience for our users. As well, for our calendar portion, we will likely use the Google Calendar API to enhance user experience. We are also considering using the Google Slides or Microsoft 365 APIs to enable users to link slide decks to a living document, in addition to using PDF and PowerPoint libraries to parse relevant data (such as slide notes) out of the uploaded content.
