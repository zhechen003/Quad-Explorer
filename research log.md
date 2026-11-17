# Research log

## 2026-11-17 — Initial project website

- **Purpose and changes:** Create the public Quad-Explorer project website in an independent repository. Add the author-provided full paper title, six existing Building experiment videos, extracted video posters and a final-map teaser, responsive styling, and single-video playback behavior. Omit authors, abstract, paper links, and citation information as requested. Add a GitHub Pages workflow that publishes only `website/`; reserve the repository root for future source code.
- **Validation:** Confirmed all six videos use H.264 at 2560 × 1080 and each is smaller than 30 MB; copied-file SHA256 hashes match the originals. Local asset and fragment links, exact paper title, six players, JavaScript syntax, and whitespace checks passed. Headless Chrome checks passed at desktop (1440 px) and mobile (390 px) widths with no horizontal overflow: all images loaded, all six video metadata loads succeeded, two videos played, playing the second paused the first, and navigation worked. No page errors or HTTP failures were observed. Desktop and mobile screenshots were visually inspected. A focused static review found no material issues.
- **Execution notes:** GitHub Pages was initially unconfigured (expected 404); it is now configured for workflow publishing. Browser tooling was installed outside the project for local checks. The tool-install shell command returned 1 because a following optional `command -v chromium` lookup failed; installation succeeded and checks used the installed Google Chrome executable. The first push failed because the empty local clone initialized as `master`; renamed it to `main` to match the workflow and retried. No website validation failures occurred.
- **Pending:** Initial push, deployment, and live URL verification. Full robot tests were not run because this change only publishes existing media.
- **Kept:** Website source and existing video files. The development repository is unchanged. This update does not constitute a new robot experiment.

- **Upload retry:** Two combined 169 MB pushes failed with HTTP 408, including an HTTP/1.1 buffered retry. The page and image-only initial push then succeeded. Uploading the six unchanged videos in separate commits before adding the deployment workflow.
- **Media batch 1/6:** Add `building_1_chenruiqiu.mp4` (29512485 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 2/6:** Add `building_2_dongxiayuan.mp4` (29430082 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 3/6:** Add `building_3_dongzhongyuan.mp4` (29397556 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 4/6:** Add `building_4_longbinlou.mp4` (29571821 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 5/6:** Add `building_5_puyuan.mp4` (29409352 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.
- **Media batch 6/6:** Add `building_6_xiayuan.mp4` (29453216 bytes); source/copy hash and local browser checks passed as recorded above. Deployment remains pending until all videos and workflow are pushed.

## 2026-11-17 — Enable GitHub Pages deployment

- **Changes:** Add the Pages workflow after all six media batches uploaded successfully. It publishes only `website/` and runs on website/workflow changes to `main` or manual dispatch. Set the repository description to the supplied paper title and its homepage to the project URL.
- **Validation:** All six separate video pushes succeeded. The exact source state passed local asset, hash, JavaScript, desktop/mobile browser, video metadata/playback, and screenshot checks recorded above. Workflow structure and publication path were reviewed against GitHub's static-site starter.
- **Pending:** First workflow execution and public URL/media verification. No new robot experiments or repository-wide tests were run. Configuration is retained.
