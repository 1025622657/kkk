/**
 * Created by Administrator on 2017/7/13.
 */


function changeCode() {
    /* 点击变换验证码 */
    $('#code').attr('src', $('#code').attr('src') + '?')
}

$(function () {
    bindAvatar();
    $('.up-down .up').click(function () {
        upup(this);
    })
    $('.up-down .down').click(function () {
        upup(this);
    })

});


function bindAvatar() {
    if (window.URL.createObjectURL) {
        bindAvatar2();
    } else if (window.FileReader) {
        bindAvatar3()
    } else {
        bindAvatar1();
    }
}

/*
 Ajax上传
 */
function bindAvatar1() {
    $('#imgSelect').change(function () {
        var obj = $(this)[0].files[0];
        var formData = new FormData();
        formData.append('csrfmiddlewaretoken',$('input[name="csrfmiddlewaretoken"]').val());
        formData.append('avatar',obj)
        $.ajax({
            url:'/uploadFile/',
            type:'post',
            data:formData,
            contentType:false,
            processData:false,
            success:function (arg) {
                $('#previewImg').attr('src',"/"+ arg);
            }
        })
    })
}

/*
 本地上传预览
 */
function bindAvatar2() {
    $('#imgSelect').change(function () {
        var obj = $(this)[0].files[0];
        var v = window.URL.createObjectURL(obj);
        $('#previewImg').attr('src', v);
        $('#previewImg').load(function () {
            window.URL.revokeObjectURL(v);
        });

    })
}

function bindAvatar3() {
    $('#imgSelect').change(function () {
        var obj = $(this)[0].files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewImg').attr('src', this.result);
        };
        reader.readAsDataURL(obj);
    })
}


