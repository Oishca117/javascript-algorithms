function flattenPlaylists(playlists) {
    let flattenedPlaylist = [];

    if (!Array.isArray(playlists)) {
        return [];
    }

    for (let i = 0; i < playlists.length; i++) {
        for (let track in playlists[i]) {
            let playlistIndex = i;
            let trackIndex = parseInt(track);
            let currentTrack = playlists[i][track];
            const newTrack = {
                ...currentTrack, source: [playlistIndex,
                    trackIndex]
            };
            flattenedPlaylist.push(newTrack);
        }
    }
    return flattenedPlaylist;
}

function scoreTracks(flattened) {
    let scoredTracks = [];
    for (let track of flattened) {
        let calculatedScore = track.votes * 10 - Math.abs(track.bpm - 120);
        const newTrack = { ...track, score: calculatedScore };
        scoredTracks.push(newTrack)
    }
    return scoredTracks;
}

function dedupeTracks(scored) {
    const normalizedPlaylist = [];

    for (let currentTrack of scored) {
        const repeat = normalizedPlaylist.some(exisitingTrack => exisitingTrack.trackId === currentTrack.trackId)

        if (repeat) {
            continue;
        }

        normalizedPlaylist.push(currentTrack);
    }
    return normalizedPlaylist;
}

function enforceArtistQuota(deduped, maxPerArtist) {
    const artistQuota = [];

    for (let currentTrack of deduped) {


        const count = artistQuota.filter(exisitingTrack => exisitingTrack.artist === currentTrack.artist).length;

        if (count >= maxPerArtist) {
            continue;
        }

        artistQuota.push(currentTrack)
    }
    return artistQuota;
}

function buildSchedule(enforcedQuota) {

    const scheduled = [];

    for (let [index, value] of enforcedQuota.entries()) {
        const scheduledTrack = {
            slot: index + 1,
            trackId: value.trackId
        }

        scheduled.push(scheduledTrack);

    }
    return scheduled;
}

function remixPlaylist(playlists, maxOccurence) {

    const flattened = flattenPlaylists(playlists);
    const scored = scoreTracks(flattened);
    const deduped = dedupeTracks(scored);
    const enforced = enforceArtistQuota(deduped, maxOccurence);
    const scheduled = buildSchedule(enforced);

    return scheduled;

}