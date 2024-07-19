System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-theme"],(function(A,e){var t={},a={},s={},n={},r={};return{setters:[function(A){t.Immutable=A.Immutable,t.LinkType=A.LinkType,t.React=A.React,t.ReactRedux=A.ReactRedux,t.classNames=A.classNames,t.css=A.css,t.defaultMessages=A.defaultMessages,t.hooks=A.hooks,t.jsx=A.jsx,t.polished=A.polished},function(A){a.getAppConfigAction=A.getAppConfigAction},function(A){s.LinkSelector=A.LinkSelector,s.OpenTypes=A.OpenTypes,s.SearchDataSetting=A.SearchDataSetting,s.SearchDataType=A.SearchDataType,s.SearchGeneralSetting=A.SearchGeneralSetting,s.SearchSuggestionSetting=A.SearchSuggestionSetting,s.SettingRow=A.SettingRow,s.SettingSection=A.SettingSection},function(A){n.Button=A.Button,n.Checkbox=A.Checkbox,n.CollapsablePanel=A.CollapsablePanel,n.Icon=A.Icon,n.Switch=A.Switch,n.TextInput=A.TextInput,n.defaultMessages=A.defaultMessages},function(A){r.useTheme=A.useTheme}],execute:function(){A((()=>{var A={11026:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAABQCAYAAACd4+VwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOESURBVHgB7d2xMmRNFAfw/r7aKhEJEiISIiIi0XgBkcwLeCAv4AVkIiLRSBARiUiQEIl269yqu3X3arvXmnF7a36/qgmMnvhffU736ZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Ij/0ift7+9/TwBQmIODg09l3P8JAHhDQAJAhoAEgIxvacKdnp4mAN4aDAZpktlBAkCGgASADAEJABkCEgAyBCQAZAhIAMgQkACQMfH3IAEYn9fX13Rzc5Pu7u7S4+Njenl5qb6fnZ1NMzMzaXl5Oa2srKQSCUgAxuL29rYaxhIh2fb09FR9Ys1wOEybm5vFBaWABGDkzs7O0tXVVae1sas8OTlJz8/PaWNjI5VCDxKAkTo/P+8cju3fRbCWwg4SgJG5vr6ugq5pamoqra2tpcXFxbSwsFB9F+XVi4uLqj/ZFMEa65aWllLf7CABGJl2OE5PT6fd3d2qdFqHY4hDOtvb22lvb69a0/Re3/KrCUgARiJ2j/Up1drOzs6bAGyK/8Wa2GXW6pOvfROQAIxEnEhtWl1d/W041mJNlGCb7u/vU99670HGdry9Je8qtuwlnXgCmGRxCrVpfX09dRV9x2YWPDw8pL71voP825ATjgBliYM3TdFn7KrZnwztUm0fiiixfjTshCMA41ZMD7Jr6AlHgDK1+40f6SPGGLqmubm51LeiDun8KfyEI0C52qEW81e7ury8/OXvmNPat+JOsb4XgsIRoGxx0KYpLv136SXGmva1DoMC3tEOQ+EIUL4YNt6+z3h0dPTbkIz/xZqmKNWWMLi82FFz7YAEoGwRjoPBIB0fH//8LgLw8PCwuhMZdx3rMmyUX6NHGbvM9tScEnaPoehZrIIR4N8S4RZB2B5WHlN24tNF/HZ+fr73XaRJOgCM1NbW1qc3OPH8Vd/j5gQkACMXARnl1i6j5urXPtr6DknPXQEwFtF3jE+UVmNOa/Qj6/uOEZzRj4yTr/Xhnvg7XvJoipAMfZRbBSQAY1UHZZd1oZSQVGIFoBgRklGabRsOh1/+RqSABKAo7ZDMvRn5FZRYAShOXW6NJ7D+9OjyuAhIAIrUtXc5LkqsAJAhIAEgQ0ACQIaABIAMAQkAGQISADIEJABkTPw9yNxIIwCwgwSADAEJABkCEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+LQfveEPhiFcggMAAAAASUVORK5CYII="},23336:A=>{A.exports="data:image/png;base64,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"},41715:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAABICAYAAAByZmWGAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANnSURBVHgB7d1PUiJXAAfgh7rI0iN4BFLKenpOoDlBdGGVoFXDDYbcIBvAKhejJ4g3iK5xYU4w5AazRoW8l2CqhxgFhfRL8n1VXfR73c3ChT/e3w4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/4JaAIAVabfbm6PR6Pt4WsSjHo+tVF+r1W4nk8kwHpf9fv8iZEhAArASzWazHYPwYzzdfOHWFJSd3IJyPQDAkrVarR+n4fjNHLdvxnv3Go1GbTAYXIVMCEgAliqFY/z4EBZX5BSSawEAliSG4374azh+iUcnthK3er1eLR13d3ffxvL5E1/x8ejoqAgZMAYJwNLEgPwcphNxpobj8fj96enp8Kn7Yxhura2t/Vx+JgbnVbfbfR8qpgUJwFJMW49bpaovz4Vjkq7F1uR35brJZFLk0IoUkAAsy265kLpQnwvHR2dnZ7ez3a3r6+u7oWIboWLxF0ea5dQJr9OJfdk/BAByUC8XRqPR3Ms2Hh4eLmJX6/5jObUiQ8Uqb0FOA64TFiccAfKyVS6klmGY33Cm/NLayZXLoov1FSEpHAFYqWzGIBcISeEIkKdhubDIRJuNjY2vumfTNnShYllN0pkjJIUjQL6uyoU4pvguzCkG4u7Ms4t0z65EdrNYnwlJ4QiQt8uZcvvw8LD+0kPNZnMvBuR+uW48Hl+GimW7UcDM7FbhCPAvsOhGAScnJ0W8/lMoTcqJYXnV7/cr3yig8mUefycFYvxD/3keAMheDLuD6c44j9JOOZ/j//Pz+Hlxf38/TJW1Wq0eyx/i/cXsd8RrlbceE1vNAbBUb1zf/rvU5Vr166+8zQOApRoMBteNRiOdFuGV0uuvdnZ2hjc3N7+EighIAJYuheT29vZ1DLoivLDoP405TreaK8r1VYekLlYAVqrZbL6L4417cbyxnl55lerSOse0lCPNVo1dqdepbrrZ+afZ56vqbhWQAGQjp5D0Ng8AstHr9c7jx8FsfWxtFuEfZgwSgKzE8cvbRqPxazzdS+U0Ptntdg8CAPBHd+vx8fGnAAAAAAAAAAAAAAAAAADAV968F2ur1ZoEAMhMr9d7U8bZixUAniAgAeAJAhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/qd+A8RAIdW/WTSMAAAAAElFTkSuQmCC"},45558:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAABQCAYAAACd4+VwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB7d0hTyRJGIDhussFFBjAgAEUCgcKNShQKPgP/CB+Bw6HAQUKDGBAgQEMYFB3+SbpS09vLTvDzHT37D5PMqI3mxVr3tRXXdUpAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCIv9KQDg8P/00A0DJHR0dDNe7vBAD8QCABIEMgASDjn/SHOz09TQD8qNPppD+ZFSQAZAgkAGQIJABkCCQAZAgkAGQIJABkCCQAZLTiHOTn52e6u7tL9/f36f39vfsLc3NzaWFhIa2srHR/AFCXxgN5fX2dLi8vu5Gsen197f5ub2/TzMxM2t7eTouLiwkAxq2xEWsE8eTkJJ2fn2fjWBWryuPj425MAWDcGgtkXPH28PCQBhWBjFUnAIxTIyPWiFw1jtPT02l9fT2tra11x6nh6ekp3dzcdPcny2LVOT8/b9wKwNjUvoKMUWl1TBov4+zv76eNjY3/4xgigLHveHBw0A1o2cXFRQKAcak9kFdXVz3PEcTd3d2eMFZFQHd2dnr+LFaX8QOAcag9kI+Pjz3Pm5ubX8axEKvJ6kg1joUAwDjUvgcZxzbKlpeXU79if7K8avz4+EgAtFNsp3335EFsucWvSbWuIIsLAAqxcqzuLX5laWmp5/n5+TkB0E7fjVwb4hgm6qq5fs5LAtAeg8auLXEMtQZyamqq5zlWlINE7+3tred5dnY2AdBu/UavTXEMtQYyxqnxRmpZ9YzjV6pnJ6v/FgDt9Kv4tS2OofYR6+rqas9zbOBW9yZzIo7VmFb/LQDa62cRbGMcQ+2BjNtyyi/mxIg17lj9KpJxNCSupiuLF3zcpAMwWaoxbGscQ+3HPIor5cqv/hYXkccnreIoR1wjF+F8eXnpfskjN4bd2tpKAEyeaiDbqpG7WOM/JFaF5TONEcm4hLzfi8hjRbm3t2cfEmACtTmMhcaOecTVccN8BLkYzVYvHgCAUWgskDFqjUjGqLSfq+bi78RotkwkARiXRkasZRG9WEnGyDX2GmPfsTgbGVGM23NiX7J4ISfCWt6/LCJp3ArAKDUeyBAhjAjG71eKubVIAjBOE3XVXCH3WnBE8uzsLAHAKExkIEM1krlvRgLAd7VixPpdRSDju5AxXh3kyyAA8JWJDmSISFZv5wGAYU3siLVMHAEYtd8ikAAwagIJABkCCQAZAgkAGQIJABkCCQAZE38OclidTicBQJUVJABkCCQAZAgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwtP8AOlgopzPb+mEAAAAASUVORK5CYII="},2816:A=>{A.exports="data:image/png;base64,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"},45769:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAABICAYAAAByZmWGAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANuSURBVHgB7d1BTis3AAZgB1h0yRE4AhVk/fJOAD1BYYFEAtLjBi+9QTeZILF4cIJyg8I6LOgJXnqDtw6Q1G5DNU0RJEDw5PF90mjGnpksWPDL9tgOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgO9BLVTA0dHR6mAw+DleNuKxHo+1VF+r1a5Ho1E/HufdbvcsAMAbyR6QzWbzKAbh53i5+sSjKSjbghKAt7AcMmq1Wr+Ow/GHKR5fjc9u1+v1Wq/XuwgAMEfZAjKFYzx9CrNrCEkA5m0pZBDDcSf8Pxy/xaMdW4lrRVHU0nFzc/NjLJ8+8BOf9/f3GwEA5iTLGGQMyK9h/CHOWH84HH48Pj7uP/R8DMO1paWl38vvxOC86HQ6HwMAzMGbtyDHrce1UtW3x8IxSfdia/Knct1oNGpoRQIwLzm6WLfKhdSF+lg43js5Obme7G5dXl7eCgAwByvh7a2XC4PBYOppG3d3d2exq3XnvpxakQGASoo9hmmWQjs8T7soil9CRjlakGvlQmoZhun1J8pPzZ0EIJNxwLXD7LKHY5LlK1YA3odnhGQlwjHJEZD9cmGWD21WVlb+0z2blqELAFTaDCFZmXBMcgTkRbkQxxQ/hCnFQNyaeHeW7lkAMpkiJCsVjkmOgDyfKB/t7e2tP/VSs9ncjgG5U64bDofnAYCF8EhIVi4ck4VYKODw8LAR7/8WSh/lxLC86Ha7FgoAWDATX7dWMhyTHNM8Ustvd7wyzr20Us7X+Ec7jeez29vbfqqs1WrrsfwpPt+Y/I14T+sRYAGlQIz/7/+9DhWVbburF86P+VvqcrX9FQDzkG03j16vd1mv19NlIzxT2v5qc3Ozf3V19UcAgFeUdT/IFJIbGxuXMega4YlJ/2nMcbzUXKNcLyQBmIdsXayTms3mhzjeuB3HG9fTllepLs1zTFM50teqsSv1MtWNFzv/Mvm+7lYAXlNlAnIWQhKAeVvIpeaKojiNp93J+tjabAQAeAVZxyBfIo5fXtfr9T/j5XYqp/HJTqezGwCAf7pbDw4OvgQAAAAAAAAAAAAAAAAAAAB4B168Fmur1RoFAKiYoihelHELuRYrAMybgASABwhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHin/gLrcCHVmeXTLAAAAABJRU5ErkJggg=="},40151:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS6SURBVHgB7d2/ThRdGMDh4xcTLdSYKI02SmJEC62kstIbsLLzBrwgb8DOyhvQykob/yQGtZAGGiAkQAEJCV/eTSbffKPiEnjPzLDPk2wBDIVhf845Z8+eLQUAAAAAAAAAAAAAAACAMThTjun58+cHBU6pFy9eHKuRfwqQRmCQSGCQ6Gw5YW/fvi0wrUePHpXTzB0MEgkMEgkMEp34HAyy7e3tlW/fvpWVlZWyvr5etre3J9+/cuVKuXTpUpmfny+3b98uQyAwRuXnz5+ThbSIrGtjY2PyiGvev39fFhcXew9NYIzGu3fvyufPn6e6Nu5qb968KVtbW+XBgwelL+ZgjMKHDx+mjqv7exFmX9zBGLylpaVJKG3nzp0r9+7dK9evXy/Xrl2bfC+Ghx8/fpzMz9oizLju5s2bpTZ3MAavG9fFixfL06dPJ0O/Jq4QixyPHz8uz549m1zT9qd5WzaBMWhx92pWCRtPnjz5JaC2+FlcE3e5RrPyWJvAGLRYEWxbWFg4NK5GXBNDyLbV1dVSm8AYtFgFbLt//36ZVsy72tbW1kptAmPQYuGiLeZZ02rPz0J3qFmDwCCRwBi07nzrKPOo2EbVdvXq1VKbwBi0bhSx/3Banz59+t/XsU+xNoExaN2FinjReJq5VFzTXZb3QjN0xGbd7utZr1+/PjSy+Flc0xZDzT42/gqMQYu4uscKREAvX76c7M5oz7Ni+Bi7Pl69evVLgH3cvYK9iAxexBEvGnc3+8Yuj3hMI353bm6u+l3MHYxRePjw4bHfdhJvX6m9XUpgjEYEFsPFabZKNbvtu2pHZojIqMRexHjE0DD2KcZcq5mHRXixrB8rj83iSHzdPUowIgs1hosCY5Sa0Ka5LvQVmSEip15E9rsDTuPcjuz3iAmMmdCN7HfvGctgiMjMaIaL8VrZ3960eVIExkyZdu52UgwRIZHAIJHAINGJz8FO++c9wVG4g0EigUEigQEAAAAAAABwJGfKMS0sLBwUOKWWlpaO1YidHJBIYJBIYJBIYJBIYJBIYJBIYJBIYJBIYJBIYJBIYJCo6tn058+fL3fv3i0XLlwoZ886Fn/o4oPtvn//XnZ3d8uYxGc6HxwclOXl5dK3as/yiGtxcVFYIxKfDnn58uXJ52iNJbKIKx6NviOrNkS8deuWuEYo/mZ37twpY9CNa35+vty4caP0qVpgc3NzhXGq8Tlax9WNq9F3ZNUC29/fL4zT0Ecef4qr0Wdk1QLb2dkpjNPa2loZqr/F1egrsmqBff361V1shOJv9uPHjzJE08bV6COyaoHFKlSsRg35f0P+E2Ftbm4OdgXxqHE1akfmTA44hDM5YMAEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBokEBomcTc/MqXnmfrU7WHM2fZx1Li76FGfux3MxnpPZnE3PTKp15r6z6ZlZNc7cdzY9M6vGiMrZ9MysGqdMO5uemVTrzH1n0zNTap+5X3VZL/5BX758KTAr7OSARAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAKDRAIDAAAAAAAAAAAAAAAAAGbevzK1giHhU5jTAAAAAElFTkSuQmCC"},17568:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPWSURBVHgB7d0/L2VpHMDxx2ZDg2yChoaKSrIFFQ0VlYpGs+3t9s3ceBlUOtmCSrNR0bANFcmEigTrdzc2d87c68/wHOfw+SQTxpyZKOab5zm/89wrJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIoye9UaPRuE/wSTWbzTc18ksCshEYZCQwyOjX9M52dnYS/KyFhYX0mVjBICOBQUbvvkWEMl1dXaXT09PWx0ejo6NpeHg49fX1pY8mMGopotrf309nZ2ddr5mamkozMzNpYGAgfRSBUSvX19etQdrJycmz1x4eHraui8imp6fTRxAYtRFxbW5upouLi1f9nd3d3dbHCK1sAqM2YuXqFNfY2FgaGhpq3XNdXl62to3t92QhtpODg4NpcnIylUlg1MLjdq9dRDU/P98aanS6fm9vr7VyPYqVbHx8vNThhzE9tRArULuIa2VlpWNcIQYc8eftMUVsBwcHqUwCo/KKY/iwvLz87EoUERaHG7GylUlgVF5xFB+r00tH7xFYe4gRajHWnARG5RWDiIfILxVx9ff3P/nv5SQwaqe3t/dV18f0sF374CM3gVE7Nzc3r7q+GJQpIrQpbgmPj4/TS8V2sHgPF8OPsgiMyisG1ulBcjfFqWEMR6xg0CaedRWfd8WRqeciiwfTxedns7OzqUwCoxaKYURcEVk8IyuKe64Ia3t7+7uvx+rV7cF0Lo5KUQsRRpwjPDo6+v9rEdnW1lbrnirOI8bWL74WK1enSWEMR147IHkrgVEbc3Nz6fz8/IcDv/H7l5ywfzyNH0eoyhp02CJSG7FCra2tveq1XcWBxs+85OUtBEbtxEq2urqaJiYmul4TYcXrv9bX1394HViZkdkiUksxul9aWmrFEqHE1jE+j0HGyMjId1vAx8DaJ4plbRcFRq3FStVpjF/0VGSxGuZ63w5bRL6MiKy4XYwXYOZ8UxyB8aW0RxZj/8XFxZSTLSJfTgQW93BPDUneixWML6mMuILAICOBQUYCg4zefcjx2X6+E7yFFQwyEhhkJDDIqCeRVaPRuE8V1mw2/R/IyAoGGTkqVVFx6rv4hi3ddDrESjVYwSrqpdGIq9oEVmHPxSOu6hNYxXWLSFz1ILAaKMYkrvow5KiJYmDUg8Dy+/bw67f0DoRVP7aImfX09PydKur+/n4zkZXAMru9vf0j/beKVc23h8D+TGQlsMw2Njb+ubu7+/3h06qsFhHWX/E9xfeWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgA/zLw+hTkb8BAWHAAAAAElFTkSuQmCC"},63930:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB7d2/jg1vGMDxxy8SCkTCNjRsIpaCylYqbkClcwMuyA3oVG6ASkXjTyKLgoZmiQSFTTbZX56TTDIG62zWM2fe4/NJTrG7s4Xs+Zp53/POOxEAAAAAAAAAAAAAAAAAtOBA7NPt27d3ApbUnTt39tXIfwGUERgUEhgUOhhL7uHDhwHzunbtWvxNzmBQSGBQSGBQaCFjsK2trXj16lW8f/8+Pn78GF+/fp19/8SJE3Hs2LFYXV2N8+fPB7Ru9MDevn07m3jIyIY+ffo0e+Uxjx8/jvX1daHRtFEDe/ToUTx//nyuY/Os9uDBg/jy5UtcuXIloEWjjcGePHkyd1zD38swoUWjnME2NjZmofQdOnQoLl26FKdPn45Tp07NvpeXh0+fPp2Nz/oyzDzu7NmzAS0Z5Qw2jOvo0aNx8+bN2aVfF1fKSY7r16/HrVu3Zsf0/W7cBlNWHlievbpZws6NGzd+Cqgvf5bH5Fmu0808QkvKA8sZwb61tbVd4+rkMXkJ2ffhw4eAlpQHlrOAfZcvX4555birb3NzM6Al5YHlxEVfjrPm1R+fpeGlJkydpVJQqDyw4XhrL+OoXEbVd/LkyYCWlAc2jCLXH87r2bNnP3yd6xShJeWBDScq8kPjecZSecxwWt4HzbSmPLBcrDv8POv+/fu7RpY/y2P68lLTwl9aUx5YxjW8DTsDunv37mx1Rn+clZePuerj3r17PwXo7EWLRlmLmHHkh8bDxb65yiNf88jfXVlZcRajKaNN01+9enXft53k7SuWS9GSUT8Hy8DycnGepVLdavshkdGS0e9ozrWI+cpLw1ynmGOtbhyW4eW0fs48dpMj+fVw67WMLLlcZOoWti9iF9o8xyWR0aImlkplZL/aEDL37XCPGFPWzFrEYWS/umcMpqaprbO7y8X8rOxPN23CFDS3N/28YzeYArerQCGBQSGBQaGlfz7Y337eE+yFMxgUEhgUEhgAAAAAAAAAe3Ig9mltbW0nYEltbGzsqxErOaCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKDQpPZFzGc57+zsxLt376Ilhw8fjosXL8aRI0fi4MGl32qyefnAx9evX8f379+j2mTeDRlXvjqtRJZxra+vC6sh+dTU48ePz54vVx3ZJC4Rh3Gtrq7GmTNnogXnzp0TV4Pyb3bhwoWotvDAhnF1WolsZWUlaNMYz5dbaGC/i6vTQmTb29tBm8a48lhYYH+KqzP1yL59+xa0aXNzM6otJLB54+pMObKXL186izUo/2Zv3ryJaqMHtte4OlONLGehcjZqjP8N2b8M6/Pnz6PMICZ7csAu7MkBEyYwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKCQwKDTqlrT2cGcKxtybfrQzWLeHe+4JLi4WKfemz/divierjRaYPdyZkqXbm94e7kzNUu1Nb/dbpmap9qa3hztTs1R709vDnSlZur3p7eHOFIy9N/2o03r5D3rx4kXAv8JKDigkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMCgkMAAAAAAAAAAAAAAAAADgn/c/TJKCIS3YLcsAAAAASUVORK5CYII="},29813:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAACQCAYAAABqK6XsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPeSURBVHgB7d0/L2VpHMDxx2ZDg2yChoaKSrIFFQ0VlYpGs61u34x4GVQ62YJKs1HRsA0VyYSKBOt3NzZ3ztzrz/Bc57n5fJIJY85MFPPN85zf+SMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMijJ33QxsbGY4Iutbm5+aFGfklANgKDjAQGGf2ausze3l6Cn7WwsJA+kxUMMhIYZPRlW8Sbm5t0fn7e+PhsdHQ0DQ8Pp76+vgTdoOOBRVSHh4fp4uKi7TFTU1NpZmYmDQwMJChZxwK7vb1tDCDOzs5ePfb4+LhxXEQ2PT2doFQdCSzi2t7eTldXV+/6O/v7+42PERqUqCOBxcrVKq6xsbE0NDTUOOe6vr5ubBubz8lCbCcHBwfT5ORkgtJkD+x5u9csopqfn28MNVodf3Bw0Fi5nsVKNj4+bvhBcbKP6WMFahZxraystIwrxIAj/rw5pojt6OgoQWmyBlYdw4fl5eVXV6KIsDrciJUNSpM1sOooPlant47eI7DmECPUaqxQd1kDqwYRF5HfKuLq7+9/8d+DuuvorVK9vb3vOj6mh82aBx9Qgo4Gdnd3967jq0GZIlKarIFVt4Snp6fprWI7WD2Hi+EHlKSjgbW6kNxOdWoYwxErGKXJGlhc66pe74pbpl6LLC5MV6+fzc7OJihN9nOwahgRV0QW18iq4pwrwtrd3f3u67F6tbswDXWW/VapCCPuIzw5Ofn/axHZzs5O45wq7keMrV98LVauVpPCGI68d0ACddCRm33n5ubS5eXlDzf8xu/fcof98934cQuVQQcl6ciYPlaotbW1dz3bVR1o/MwjL/DVOnodLFay1dXVNDEx0faYCCue/1pfX//hOTCRUZqOvzIgRvdLS0uNWCKU2DrG5zHIGBkZ+W4L+BxY80TRdpGSfNlLb2KlajXGr3opslgNvbeDOivitW0RWXW7GA9giou6K+a9iM2Rxdh/cXExQd0V9ersCCzO4V4akkCdFPdmX3FREq/OhowEBhkJDDLqup8P9tk/3wk+wgoGGQkMMhIYZNSTyGpjY+Mx1djm5qb/AxlZwSCjrpsidot4eqD64p92Wt0MTT1YwWrqrdGIq94EVmOvxSOu+hNYzbWLSFxlEFgBqjGJqxyGHIWoBkYZBJbft6dfv6VPIKzy2CJm1tPT83eqqcfHx+1EVgLL7P7+/o/03ypWN9+eAvszkZXAMtva2vrn4eHh96dP67JaRFh/xfcU31sCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvsy//ZVORmB05vIAAAAASUVORK5CYII="},48891:A=>{"use strict";A.exports=t},23137:A=>{"use strict";A.exports=a},34796:A=>{"use strict";A.exports=r},30726:A=>{"use strict";A.exports=n},77756:A=>{"use strict";A.exports=s}},e={};function i(t){var a=e[t];if(void 0!==a)return a.exports;var s=e[t]={exports:{}};return A[t](s,s.exports,i),s.exports}i.d=(A,e)=>{for(var t in e)i.o(e,t)&&!i.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:e[t]})},i.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),i.r=A=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},i.p="";var l={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(l),i.d(l,{__set_webpack_public_path__:()=>x,default:()=>m});var A,e,t,a,s,n=i(48891),r=i(23137),o=i(77756);!function(A){A.GeocodeService="GeocodeService",A.FeatureService="FeatureService"}(A||(A={})),function(A){A.ResultPanel="Result_Panel",A.OtherWidgets="Other_Widgets"}(e||(e={})),function(A){A.Style1="Style1",A.Style2="Style2",A.Style3="Style3"}(t||(t={})),function(A){A.Classic="Classic",A.Compact="Compact"}(a||(a={})),function(A){A.None="",A.Init="init",A.Loading="loading",A.Loaded="loaded",A.Warning="warning",A.Error="error"}(s||(s={}));var c=i(30726);const g={searchResult:"Search result",arrangementStyle:"Arrangement style",showSearchResult:"Show search results in",resultPanel:"Result panel",otherWidgets:"Other widgets",autoSelect:"Auto select the first result",redirectSearchResult:"Redirect if search result is not empty",notSetCorrectle:"The search or display field is not set correctly.",selectedField:"{fieldNumber} Selected",searchExample:"Example: {url}",locatorSourceErrorHint:"The URL you entered is invalid or inaccessible",locatorUrlError:"Locator URL is not set correctly",maximumResults:"Maximum display results per source",outputDsLabel:"{label} result",searchBoxTip:"Search box",searchIconTip:"Search icon",searchClassic:"Classic",searchCompact:"Compact",arrangementStyleIndex:"Arrangement style {index}",styleSquare:"Square",styleCurve:"Curve",styleLinear:"Linear",_url_params_search_status_label:"Search status"};var u=i(34796);const d=A=>{const e=n.css`
    .active {
      .style-img {
        border-color: var(--primary-600);
      }
    }
    .style-img {
      border: 2px solid var(--secondary-200);
    }
    &>div {
      flex: 1;
    }
    & button, & button:hover, & button.active {
      background-color: var(--secondary-200) !important;
    }
    & button {
      width: ${n.polished.rem(108)};
      height: ${n.polished.rem(78)};
      padding: 0;
    }
    .title {
      font-size: ${n.polished.rem(13)};
      line-height: ${n.polished.rem(18)};
      margin-top: ${n.polished.rem(6)};
      color: var(--dark-600);
    }
  `,t=n.ReactRedux.useSelector((A=>A.appContext.isRTL)),s=n.hooks.useTranslation(g,c.defaultMessages,n.defaultMessages),{config:r,id:l,onSettingChange:u}=A,{searchResultStyle:d}=r,p=A=>{u({id:l,config:r.set("searchResultStyle",A)})};return(0,n.jsx)(o.SettingRow,{flow:"wrap",label:s("style"),role:"group","aria-label":s("style")},(0,n.jsx)("div",{className:"d-flex justify-content-between w-100",css:e},(0,n.jsx)("div",null,(0,n.jsx)(c.Button,{type:"tertiary",className:d===a.Classic?"active":"",title:s("searchClassic"),onClick:()=>{p(a.Classic)}},(0,n.jsx)(c.Icon,{className:"style-img w-100 h-100",icon:i(t?63930:40151)})),(0,n.jsx)("div",{className:"title text-center"},s("searchClassic"))),(0,n.jsx)("div",null,(0,n.jsx)(c.Button,{type:"tertiary",className:d===a.Compact?"active":"",title:s("searchCompact"),onClick:()=>{p(a.Compact)}},(0,n.jsx)(c.Icon,{className:"style-img w-100 h-100",icon:i(t?29813:17568)})),(0,n.jsx)("div",{className:"title text-center"},s("searchCompact")))))},p=A=>{const t=n.hooks.useTranslation(g,c.defaultMessages,n.defaultMessages),a=(0,u.useTheme)(),s=n.css`
    .check-box-label {
      color: ${a.colors.palette.dark[800]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .divider-line {
      padding-bottom: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `,{config:r,id:i,useDataSources:l,onSettingChange:p}=A,{searchResultView:S,hint:m,resultMaxNumber:x,linkParam:h,isAutoSelectFirstResult:f}=r,[v,b]=n.React.useState(!1),[C,R]=n.React.useState(!1),[B,w]=n.React.useState(x),[Q,W]=n.React.useState((0,n.Immutable)({}));n.React.useEffect((()=>{k()}),[r]);const k=()=>{const A={maxSuggestions:null==r?void 0:r.maxSuggestions,isUseCurrentLoation:null==r?void 0:r.isUseCurrentLoation,isShowRecentSearches:null==r?void 0:r.isShowRecentSearches,recentSearchesMaxNumber:null==r?void 0:r.recentSearchesMaxNumber};W((0,n.Immutable)(A))},I=(A,e)=>{p({id:i,config:r.setIn(A,e)})},j=A=>0===(null==A?void 0:A.length)||Number(A)&&Number(A)>0;return(0,n.jsx)(o.SettingSection,{title:t("generalSearchOption"),css:s},(0,n.jsx)(o.SearchGeneralSetting,{id:i,hint:m,onSettingChange:A=>{I(["hint"],A)}}),(0,n.jsx)("div",null,(0,n.jsx)(o.SettingSection,{className:"search-setting-con"},(0,n.jsx)(o.SettingRow,{role:"group","aria-label":t("searchSuggestion")},(0,n.jsx)(c.CollapsablePanel,{label:t("searchSuggestion"),isOpen:v,onRequestOpen:()=>{b(!0)},onRequestClose:()=>{b(!1)},level:1},(0,n.jsx)(o.SearchSuggestionSetting,{id:i,settingConfig:Q,onSettingChange:A=>{if(!A)return!1;const e=r.merge(A);p({id:i,config:e})}})))),v&&(0,n.jsx)(o.SettingSection,{className:"divider-line"})),(0,n.jsx)(o.SettingRow,{role:"group","aria-label":t("searchResult")},(0,n.jsx)(c.CollapsablePanel,{label:t("searchResult"),isOpen:C,onRequestOpen:()=>{R(!0)},onRequestClose:()=>{R(!1)},level:1},(0,n.jsx)(o.SettingRow,{label:t("resultPanel"),className:"mt-2"},(0,n.jsx)(c.Switch,{title:t("resultPanel"),checked:S===e.ResultPanel,onChange:A=>{(A=>{const t=A?e.ResultPanel:e.OtherWidgets;I(["searchResultView"],t)})(S===e.OtherWidgets)}})),S===e.ResultPanel&&(0,n.jsx)(o.SettingRow,{flow:"wrap",className:"checkbox-con",label:t("maximumResults")},(0,n.jsx)(c.TextInput,{"aria-label":t("maximumResults"),size:"sm",value:B,onChange:A=>{const e=A.target.value;j(e)&&w(e)},onAcceptValue:A=>{(!A||A>20)&&w(A=x||6),j(A)&&I(["resultMaxNumber"],Number(A))},className:"w-100"})),S===e.ResultPanel&&(0,n.jsx)(o.SettingRow,null,(0,n.jsx)("div",{className:"cursor-pointer d-flex align-items-center",onClick:A=>{I(["isAutoSelectFirstResult"],!f)},"aria-label":t("autoSelect")},(0,n.jsx)(c.Checkbox,{checked:f,title:t("autoSelect"),className:"mr-1"}),(0,n.jsx)("span",{className:"check-box-label flex-grow-1 ml-1"},t("autoSelect")))),S===e.OtherWidgets&&(0,n.jsx)(o.SettingRow,{className:"d-block",flow:"wrap",label:t("redirectSearchResult")},(0,n.jsx)(o.LinkSelector,{onSettingConfirm:A=>{A&&I(["linkParam"],A)},linkParam:h,useDataSources:l,widgetId:i,hiddenLinks:(0,n.Immutable)([n.LinkType.WebAddress,n.LinkType.PrintPreview]),openTypes:(0,n.Immutable)([o.OpenTypes.CurrentWindow])})),S===e.ResultPanel&&(0,n.jsx)(d,{id:i,config:r,onSettingChange:p}))))},S=A=>{const e=n.css`
    .active {
      .style-img {
        border: 2px solid var(--primary-600);
      }
    }
    .style-img {
      border: 2px solid transparent;
      height: ${n.polished.rem(36)} !important;
      margin: 0;
    }
    .arrangement1 .style-img {
      height: ${n.polished.rem(40)} !important;
    }
    .arrangement {
      margin: 0;
      height: auto;
      background: var(--secondary-200);
    }
    .arrangement-mt {
      margin-top: ${n.polished.rem(12)};
    }
    & button {
      width: ${n.polished.rem(108)};
      height: ${n.polished.rem(80)};
      padding: 0;
    }
  `,a=n.hooks.useTranslation(g,c.defaultMessages,n.defaultMessages),{config:s,id:r,onSettingChange:l}=A,u=n.ReactRedux.useSelector((A=>A.appContext.isRTL)),d=A=>{l({id:r,config:s.set("arrangementStyle",A)})};return(0,n.jsx)(o.SettingSection,{title:a("arrangementStyle"),css:e},(0,n.jsx)(o.SettingRow,null,(0,n.jsx)("div",null,(0,n.jsx)(c.Button,{type:"tertiary",className:(0,n.classNames)("w-100 arrangement arrangement1",{active:s.arrangementStyle===t.Style1}),onClick:()=>{d(t.Style1)},title:a("styleSquare")},(0,n.jsx)(c.Icon,{className:"style-img w-100 h-100",icon:i(u?45558:11026)})),(0,n.jsx)(c.Button,{type:"tertiary",className:(0,n.classNames)("w-100 arrangement arrangement-mt",{active:s.arrangementStyle===t.Style2}),onClick:()=>{d(t.Style2)},title:a("styleCurve")},(0,n.jsx)(c.Icon,{className:"style-img w-100 h-100",icon:i(u?2816:23336)})),(0,n.jsx)(c.Button,{type:"tertiary",className:(0,n.classNames)("w-100 arrangement arrangement-mt",{active:s.arrangementStyle===t.Style3}),onClick:()=>{d(t.Style3)},title:a("styleLinear")},(0,n.jsx)(c.Icon,{className:"style-img w-100 h-100",icon:i(u?45769:41715)})))))},m=e=>{const{config:t,id:a,portalUrl:s,onSettingChange:i,useDataSources:l}=e,c=n.css`
    .suggestion-setting-con  {
      padding-bottom: 0;
    }
  `,g=e=>{var t;const a=[];return null===(t=null==e?void 0:e.datasourceConfig)||void 0===t||t.forEach((e=>{(null==e?void 0:e.searchServiceType)===A.GeocodeService&&a.push(null==e?void 0:e.useUtility)})),a};return(0,n.jsx)("div",{className:"widget-setting-search jimu-widget-search",css:c},(0,n.jsx)(o.SearchDataSetting,{id:a,portalUrl:s,useDataSources:l,createOutputDs:!0,onSettingChange:(A,e)=>{if(!A)return!1;const s=(0,r.getAppConfigAction)(),n=null==t?void 0:t.setIn(["datasourceConfig"],A);let i={id:a,config:n};(null==e?void 0:e.isWidgetJsonDsChanged)&&(null==e?void 0:e.dsInWidgetJson)&&(i=Object.assign(Object.assign({},i),null==e?void 0:e.dsInWidgetJson)),s.editWidget(i).exec()},onOutputDsSettingChange:(A,e,s)=>{if(!e)return!1;const n=null==t?void 0:t.setIn(["datasourceConfig"],e);let i={id:a,config:n,useUtilities:g(n)};(null==s?void 0:s.isWidgetJsonDsChanged)&&(null==s?void 0:s.dsInWidgetJson)&&(i=Object.assign(Object.assign({},i),null==s?void 0:s.dsInWidgetJson)),(0,r.getAppConfigAction)().editWidget(i,A).exec()},datasourceConfig:null==t?void 0:t.datasourceConfig,searchDataSettingType:o.SearchDataType.Both,enableFiltering:null==t?void 0:t.enableFiltering,onEnableFilteringChange:A=>{i({id:a,config:t.set("enableFiltering",A)})}}),(0,n.jsx)(p,{id:a,config:t,onSettingChange:i,useDataSources:l}),(0,n.jsx)(S,{id:a,config:t,onSettingChange:i}))};function x(A){i.p=A}})(),l})())}}}));