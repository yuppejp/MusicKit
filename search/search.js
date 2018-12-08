var vm = new Vue({
    el: '#app',
    data: {
        albums: []
    },
    computed: {
        artworkUrl: function() {
            console.log(this);
            alert(this);
            //var url = this.albums[i].attributes.artwork.url;
            //console.log(url);
            //return artworkurl;
            //return this.attributes.artwork.url;
            //return this.attributes.artwork.url.replace(/({w}|{h})/g, '100');
            return 'https://is2-ssl.mzstatic.com/image/thumb/Music62/v4/b8/b3/e7/b8b3e77f-019c-d07c-ba22-d16ac95021bc/16UMGIM59612.jpg/100x100bb.jpeg';

            // https://is2-ssl.mzstatic.com/image/thumb/Music62/v4/b8/b3/e7/b8b3e77f-019c-d07c-ba22-d16ac95021bc/16UMGIM59612.jpg/{w}x{h}bb.jpeg"
        
        }
    }
});