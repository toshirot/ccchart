        function echoVersion(version, update){
            //echo ccchart version 
            var minilogos = document.querySelectorAll('.minilogo');
            for(var i in minilogos){
              minilogos[i].innerHTML = ccchart_mini_logo(version, update);
            };

               //+ '<style>'
               // + '.minilogo{ margin: 18px;margin-left: 25px;color: #bbb; text-shadow:rgba(30, 30, 30, 0.3) 0 3px 3px}'
               // + '.ogo{ color: #bbb }'
               // + '.versions{ color: #ddd; display: inline;color: #bbb; text-shadow:rgba(30, 30, 30, 0.3) 0 3px 3px }'
               // + '</style>'
        }
        function ccchart_mini_logo(version, update){
            var ls = '/ License: MIT';
            if(version.indexOf('v0.9')!==-1)ls='/ Public Domain';

            return ''
                + '<a class="logo" href="http://ccchart.com/index.htm" target="ccchart">ccchart</a>'
                + '<div class="versions"> '
                + '<span class="version"> '
                + ' v' + version 
                + '</span>'
                + '<span class="update"> '
                + '( update: ' + update + ' '+ls+')'
                + '</span>'
                + '</div>';
        }
        function rcv(evt){
            var version = window.ccchart.aboutThis.version;
            var update = window.ccchart.aboutThis.update;
            echoVersion(version, update);
        }

        window.addEventListener( 'load', rcv);