// ==UserScript==
// @name         MakeOPRGreateAgain
// @version      0.41
// @description  Make OPR Great Again! Add some fancy displays to your profile based on information already in it.
// @updateURL    https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/MakeOPRGreateAgain.user.js
// @downloadURL  https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/MakeOPRGreateAgain.user.js
// @author       jqqqqqqqqqq
// @match        https://opr.ingress.com/recon
// @match        https://opr.ingress.com/
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

var calltimes = 0;

image_bronze = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAI2GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+MTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNDI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNTk8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MzY1NmE3MGMtZWNjOS00MWU1LWEyZDktOWFlMzJjZGI4YTBiPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA3LTE2VDAwOjMzOjIyKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjM2NTZhNzBjLWVjYzktNDFlNS1hMmQ5LTlhZTMyY2RiOGEwYjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhp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\">";
image_silver = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIz2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+MTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNDA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6ZTE4NmI3OWYtY2NhNi00NmI0LWI2YzMtNWY1NjVmOWM5ZDVmPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA3LTE2VDAwOjMzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmUxODZiNzlmLWNjYTYtNDZiNC1iNmMzLTVmNTY1ZjljOWQ1Zjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rv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\">";
image_gold = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAI2GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+MTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNDI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NGRkMGRjN2ItODNkNi00M2Y3LTkwODctYTRkZWI3MmU1ZGM0PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA3LTE2VDAwOjMzOjE1KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjRkZDBkYzdiLTgzZDYtNDNmNy05MDg3LWE0ZGViNzJlNWRjNDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhp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\">";
image_titanium = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAI2GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+MTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNDI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MDFkOTQxNzUtNzkwMi00NjExLTg1ZmUtMDdiYzM5MjcwYjJmPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA3LTE2VDAwOjMyOjUxKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjAxZDk0MTc1LTc5MDItNDYxMS04NWZlLTA3YmMzOTI3MGIyZjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhp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\">";
image_obsidian = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAI2GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+MTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNDI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NGM0OWM3YTMtN2M0Zi00NTlmLWJiOGUtZmRlNjVhOTQyNmYzPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTA3LTE2VDAwOjMzOjA2KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjRjNDljN2EzLTdjNGYtNDU5Zi1iYjhlLWZkZTY1YTk0MjZmMzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhp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\">";

function addInfo(tooltip, name, value) {
    var p1 = document.createElement("p");
    var br1 = document.createElement("br");
    p1.innerHTML = "<span id=\"achievement1" + calltimes + "\" style=\"margin-left: 15px\" class=\"glyphicon glyphicon-info-sign ingress-gray pull-left\" uib-tooltip-trigger=\"outsideclick\" uib-tooltip-placement=\"left\" tooltip-class=\"goldBorder\" uib-tooltip=\"" + tooltip + "\"></span>\
<span style=\"margin-left: 5px\" class=\"ingress-mid-blue pull-left\">" + name + "</span>\
<span class=\"gold pull-right\">" + value + "</span>";

    var p2 = document.createElement("p");
    var br2 = document.createElement("br");
    p2.innerHTML = "<span id=\"achievement2" + calltimes + "\" class=\"glyphicon glyphicon-info-sign ingress-gray pull-left\" uib-tooltip-trigger=\"outsideclick\" uib-tooltip-placement=\"left\" tooltip-class=\"goldBorder\" uib-tooltip=\"" + tooltip + "\"></span>\
<span style=\"margin-left: 5px\" class=\"ingress-mid-blue pull-left\">" + name + "</span>\
<span class=\"gold pull-right\">" + value + "</span>";
    var mobile_version = document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.collapse > ul > #player_stats > div");
    var desktop_version = document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.collapse > div > #player_stats > div");
    mobile_version.appendChild(br1);
    mobile_version.appendChild(p1);
    desktop_version.appendChild(br2);
    desktop_version.appendChild(p2);
    var span1 = "#achievement1" + calltimes;
    var hover1 = "#hover1" + calltimes;
    var _calltimes = calltimes.toString() + "";
    $(span1).mouseover(function(){
        var top = $(span1).position().top - 34;
        var left = $(span1).position().left - 90;
        $("<div id=\"hover1" + _calltimes + "\" class=\"tooltip ng-isolate-scope top goldBorder fade in\" tooltip-animation-class=\"fade\" uib-tooltip-classes=\"\" ng-class=\"{ in: isOpen() }\" uib-tooltip-popup=\"\" uib-title=\"\" content=\"" + tooltip + "\" placement=\"top\" popup-class=\"goldBorder\" animation=\"animation\" is-open=\"isOpen\" origin-scope=\"origScope\" style=\"top: " + top + "px; left: " + left + "px;\">\
<div class=\"tooltip-arrow\"></div>\
<div class=\"tooltip-inner ng-binding\" ng-bind=\"content\">" + tooltip + "</div>\
</div>").insertAfter(span1);
        //$(hover1).addClass('in').removeClass('hide');
    });
    $(span1).mouseout(function(){
        $(hover1).remove();
    });
    var span2 = "#achievement2" + calltimes;
    var hover2 = "#hover2" + calltimes;
    $(span2).mouseover(function(){
        var top = $(span2).position().top - 34;
        var left = $(span2).position().left - 90;
        $("<div id=\"hover2" + _calltimes + "\" class=\"tooltip ng-isolate-scope top goldBorder fade in\" tooltip-animation-class=\"fade\" uib-tooltip-classes=\"\" ng-class=\"{ in: isOpen() }\" uib-tooltip-popup=\"\" uib-title=\"\" content=\"" + tooltip + "\" placement=\"top\" popup-class=\"goldBorder\" animation=\"animation\" is-open=\"isOpen\" origin-scope=\"origScope\" style=\"top: " + top + "px; left: " + left + "px;\">\
<div class=\"tooltip-arrow\"></div>\
<div class=\"tooltip-inner ng-binding\" ng-bind=\"content\">" + tooltip + "</div>\
</div>").insertAfter(span2);
        //$(hover2).addClass('in');
    });
    $(span2).mouseout(function(){
        //$(hover2).addClass('hide').removeClass('in');
        $(hover2).remove();
    });
    calltimes++;
}

(function() {

    Number.prototype.toPercent = function(){
        return (Math.round(this * 1000)/10).toFixed(1) + '%';
    };

    function main(){
        var total = parseInt(document.querySelector("#player_stats > div > p:nth-child(4) > span.gold.pull-right").innerHTML);
        var created = parseInt(document.querySelector("#player_stats > div > p:nth-child(6) > span.gold.pull-right").innerHTML);
        var rejected = parseInt(document.querySelector("#player_stats > div > p:nth-child(8) > span.gold.pull-right").innerHTML);
        var remaining = total - created - rejected;

        var created_p = (created / total).toPercent();
        var rejected_p = (rejected / total).toPercent();
        var remaining_p = (remaining / total).toPercent();
        //console.log(document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > ul > div > div > p:nth-child(4) > span.gold.pull-right").innerHTML);

        //$("div[id=player_stats] > div > p:nth-child(4) > span.gold.pull-right").each(function(index, element){
        //    element.innerHTML += "(状态未知：" + remaining_p +")";
        //});
        $("div[id=player_stats] > div > p:nth-child(6) > span.gold.pull-right").each(function(index, element){
            element.innerHTML += "(" + created_p +")";
        });
        $("div[id=player_stats] > div > p:nth-child(8) > span.gold.pull-right").each(function(index, element){
            element.innerHTML += "(" + rejected_p +")";
        });
        //document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > ul > div > div > p:nth-child(4) > span.gold.pull-right").innerHTML += "(" + remaining_p +")";
        //document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > ul > #player_stats > div > p:nth-child(6) > span.gold.pull-right").innerHTML += "(" + created_p +")";
        //document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > ul > #player_stats > div > p:nth-child(8) > span.gold.pull-right").innerHTML += "(" + rejected_p +")";

        //document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > div > #player_stats > div > p:nth-child(4) > span.gold.pull-right").innerHTML += "(" + remaining_p +")";
        //document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > div > #player_stats > div > p:nth-child(6) > span.gold.pull-right").innerHTML += "(" + created_p +")";
        //document.querySelector("body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.navbar-responsive-collapse.in.collapse > div > #player_stats > div > p:nth-child(8) > span.gold.pull-right").innerHTML += "(" + rejected_p +")";

        //addInfo("已经过了的 po 占所有 po 的比例", "通过率", created_p);
        //addInfo("已经拒了的 po 占所有 po 的比例", "拒绝率", rejected_p);
        addInfo("等待结算和判断错误的 po 占所有 po 的比例", "未结算（未计数）：", remaining + " (" + remaining_p + ")");

        sum = created + rejected;
        if(sum < 100) {
            addInfo("下一个要获得的成就", "下一个成就：", sum + "/100 (" + (sum / 100).toPercent() + ") " + image_bronze);
        } else if(sum < 750) {
            //addInfo("现在已经获得的成就", "当前成就：", image_bronze);
            addInfo("下一个要获得的成就", "下一个成就：", image_bronze + "== " + sum + "/750 (" + (sum / 750).toPercent() + ") " + " -->" + image_silver);
        } else if(sum < 2500) {
            //addInfo("现在已经获得的成就", "当前成就：", image_silver);
            addInfo("下一个要获得的成就", "下一个成就：", image_silver + "== " + sum + "/2500 (" + (sum / 2500).toPercent() + ") " + " -->" + image_gold);
        } else if(sum < 5000) {
            //addInfo("现在已经获得的成就", "当前成就：", image_gold);
            addInfo("下一个要获得的成就", "下一个成就：", image_gold + "== " + sum + "/5000 (" + (sum / 5000).toPercent() + ") " + " -->" + image_titanium);
        } else if(sum < 10000) {
            //addInfo("现在已经获得的成就", "当前成就：", image_titanium);
            addInfo("下一个要获得的成就", "下一个成就：", image_titanium + "== " + sum + "/10000 (" + (sum / 10000).toPercent() + ") " + " -->" + image_obsidian);
        } else{
            addInfo("现在已经获得的成就", "当前成就：", image_obsidian);
        }
    }
    $(main);
})();
